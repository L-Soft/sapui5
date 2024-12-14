sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-20-data-types',
        settings: {
            id: 'sap-20-data-types'
        },
        async: true
    }).placeAt('content');
});