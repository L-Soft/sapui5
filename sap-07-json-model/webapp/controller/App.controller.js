sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
], (Controller, MessageToast, JSONModel) => {
    'use strict';
    return Controller.extend('sap.ui.sap-07-json-model.view.App', {
        onInit() {
            const oData = {
                recipient: {
                    name: 'Hello, World!'
                }
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onShowHello() {
            MessageToast.show('Hello, World!');
        }
    });
})