sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-12-shell-control-as-container',
        settings: {
            id: 'sap-12-shell-control-as-container'
        },
        async: true
    }).placeAt('content');
});