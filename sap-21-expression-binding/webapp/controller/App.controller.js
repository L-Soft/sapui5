sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
], (Controller) => {
    'use strict';

    return Controller.extend('sap.sap-21-expression-binding.view.App', {
        OnInit() {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
        }
    });
})