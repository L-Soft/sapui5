sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-17-fragment-callbacks',
        settings: {
            id: 'sap-17-fragment-callbacks'
        },
        async: true
    }).placeAt('content');
});