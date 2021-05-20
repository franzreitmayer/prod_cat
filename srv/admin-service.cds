using eu.reitmayer.cds.sample.prodcat from '../db/schema';

service AdminService {
    entity Products as projection on prodcat.Products;
    entity Suppliers as projection on prodcat.Suppliers;
    entity Orders as projection on prodcat.Orders;
}


