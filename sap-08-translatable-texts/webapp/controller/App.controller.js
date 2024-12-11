sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
], (Controller, MessageToast, JSONModel, ResourceModel) => {
    'use strict';
    return Controller.extend('sap.ui.sap-08-translatable-texts.view.App', {
        onInit() {
            const oData = {
                recipient: {
                    name: 'Hello, World!'
                }
            };

            const oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            const i18nModel = new ResourceModel({
                bundleName: 'sap.ui.sap-08-translatable-texts.i18n.i18n',
            });

            console.log('i18nModel', i18nModel);
            this.getView().setModel(i18nModel, 'i18n')
        },
        onShowHello() {
            const oBundle = this.getView().getModel('i18n').getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty('/recipient/name');
            const sMsg = oBundle.getText('helloMsg', [sRecipient])

            MessageToast.show(sMsg);
        }
    });
})