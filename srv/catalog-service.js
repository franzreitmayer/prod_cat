/*
   Implementations for CatalogService
*/

module.exports = (srv) => {
    const { Products } = cds.entities

    srv.before('CREATE', 'Orders', async(req) => {
        const orderItems = req.data.Items;
        var outOfStock = 0;

        for (index = 0; index < orderItems.length; index++) {
            var product = await SELECT.from(Products, ['stock', 'name']).where({ ID: { '=': orderItems[index].product_ID } });

            if (product[0].stock < orderItems[index].amount) {
                req.error(400, 'Not enough stock for ' + product[0].name);
                outOfStock += 1;
            }
        }
        if (outOfStock == 0) {
            for (index = 0; index < orderItems.length; index++) {
                var affectedRows = await UPDATE(Products)
                    .set({ stock: { '-=': orderItems[index].amount } })
                    .where({ ID: { '=': orderItems[index].product_ID } })
            }
        }
    })
}