sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-18-icons',
        settings: {
            id: 'sap-18-icons'
        },
        async: true
    }).placeAt('content');
});