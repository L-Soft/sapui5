sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-19-aggregation-binding',
        settings: {
            id: 'sap-19-aggregation-binding'
        },
        async: true
    }).placeAt('content');
});