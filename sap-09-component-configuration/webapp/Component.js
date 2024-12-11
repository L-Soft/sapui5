sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
], (UIComponent, JSONModel, ResourceModel) => {
    'use strict';

    return UIComponent.extend('sap.ui.sap-09-component-configuration.Component', {
        metadata: {
            'interface' : ['sap.ui.core.IAsyncContentCreation'],
            'rootView': {
                'viewName' : 'sap.ui.sap-09-component-configuration.view.App',
                'type' : 'XML',
                'id': 'app',
            }
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

            const i18nModel = new ResourceModel({
                bundleName : 'sap.ui.sap-09-component-configuration.i18n.i18n',
            });
            this.setModel(i18nModel, 'i18n');
        }
    });
});