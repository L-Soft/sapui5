sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/Device',
], (UIComponent, JSONModel, Device) => {
    'use strict';

    return UIComponent.extend('sap.sap-21-expression-binding.Component', {
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

            // set device model
            const oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel, "device");

            // create the views based on the url/hash
            this.getRouter().initialize();
        },

        getContentDensityClass() {
            return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
        }
    });
});