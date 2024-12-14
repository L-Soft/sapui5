sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-16-dialogs-and-fragments',
        settings: {
            id: 'sap-16-dialogs-and-fragments'
        },
        async: true
    }).placeAt('content');
});