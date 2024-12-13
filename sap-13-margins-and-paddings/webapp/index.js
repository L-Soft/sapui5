sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-13-margins-and-paddings',
        settings: {
            id: 'sap-13-margins-and-paddings'
        },
        async: true
    }).placeAt('content');
});