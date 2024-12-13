sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-14-custom-css-and-theme-colors',
        settings: {
            id: 'sap-14-custom-css-and-theme-colors'
        },
        async: true
    }).placeAt('content');
});