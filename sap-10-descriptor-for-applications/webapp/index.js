sap.ui.define([
    'sap/ui/core/ComponentContainer',
], (ComponentContainer) => {
    'use strict';

    new ComponentContainer({
        name: 'sap.ui.sap-10-descriptor-for-applications',
        settings: {
            id: 'sap-10-descriptor-for-applications'
        },
        async: true
    }).placeAt('content');
});