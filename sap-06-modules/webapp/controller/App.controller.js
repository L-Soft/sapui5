sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
], (Controller, MessageToast) => {
    'use strict';
    return Controller.extend('sap.ui.sap-06-modules.view.App', {
        onShowHello() {
            MessageToast.show('Hello, World!');
        }
    });
})