sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-21-expression-binding',
        settings: {
            id: 'sap-21-expression-binding'
        },
        async: true
    }).placeAt('content');
});