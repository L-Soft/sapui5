sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-15-nested-views',
        settings: {
            id: 'sap-15-nested-views'
        },
        async: true
    }).placeAt('content');
});