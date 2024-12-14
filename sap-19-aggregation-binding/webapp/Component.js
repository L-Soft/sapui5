sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
], (UIComponent, JSONModel) => {
    'use strict';

    return UIComponent.extend('sap.sap-19-aggregation-binding.Component', {
        metadata: {
            interface: ["sap.ui.core.IAsyncContentCreation"],
            metadata: "json"
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);

            const oData = {
                recipient: {
                    name: 'World'
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});