sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-11-pages-and-panels',
        settings: {
            id: 'sap-11-pages-and-panels'
        },
        async: true
    }).placeAt('content');
});