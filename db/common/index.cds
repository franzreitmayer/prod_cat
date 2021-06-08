namespace eu.reitmayer.cds.common;

using { Country } from '@sap/cds/common';

aspect Address {
    street          : String(100) @title : '{i18n>street}';
    postcode        : String(20)  @title : '{i18n>postcode}';
    town            : String(40)  @title : '{i18n>town}';
    Country         : Country;
}