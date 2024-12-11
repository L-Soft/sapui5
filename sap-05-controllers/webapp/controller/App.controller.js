sap.ui.define([
    'sap/ui/core/mvc/Controller',
], (Controller) => {
    'use strict';
    return Controller.extend('sap.ui.sap-05-controllers.view.App', {
        onShowHello() {
            alert('Hello, World!');
        }
    });
})