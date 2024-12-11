sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-09-component-configuration',
        settings: {
            id: 'sap-09-component-configuration'
        },
        async: true
    }).placeAt('content');
});