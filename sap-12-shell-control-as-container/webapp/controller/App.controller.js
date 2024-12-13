sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
], (Controller, MessageToast) => {
    'use strict';
    return Controller.extend('sap.ui.sap-12-shell-control-as-container.view.App', {
        onShowHello() {
            const oBundle = this.getView().getModel('i18n').getResourceBundle();
            const sRecipient = this.getView().getModel().getProperty('/recipient/name');
            const sMsg = oBundle.getText('helloMsg', [sRecipient])

            MessageToast.show(sMsg);
        }
    });
})