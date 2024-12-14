sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JsonModel, Filter, FilterOperator) => {
    'use strict';

    return Controller.extend("sap.ui.sap-21-expression-binding.InvoiceList", {
        onInit() {
            const oViewModel = new JsonModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },

        onFilterInvoices(oEvent) {
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // filter binding
            const oList = this.byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }
    });
});