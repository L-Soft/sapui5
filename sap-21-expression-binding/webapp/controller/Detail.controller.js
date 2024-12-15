sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, History, MessageToast, JSONModel) => {
    'use strict';

    return Controller.extend('sap.ui.sap-21-expression-binding.Detail', {
        onInit() {
            const oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");

            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute('detail').attachPatternMatched(this.onObjectMatched, this);
        },

        onObjectMatched(oEvent) {
            this.getView().bindElement({
                path: '/' + window.decodeURIComponent(oEvent.getParameter('arguments').invoicePath),
                model: 'invoice'
            });
        },

        onNavBack() {
            const oHistory = History.getInstance();
            const sPreviousHash  = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1)
            } else {
                this.getOwnerComponent().getRouter().navTo('overview', {}, true);
            }
        },

        onRatingChange(oEvent) {
            const fValue = oEvent.getParameter("value");
            const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

            MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
        }
    });
});