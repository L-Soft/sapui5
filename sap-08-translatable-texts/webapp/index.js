sap.ui.define([
    'sap/ui/core/mvc/XMLView',
], (XMLView) => {
    'use strict';

    XMLView.create({
        viewName: 'sap.ui.sap-08-translatable-texts.view.App'
    }).then((oView) => {
        oView.placeAt("content")
    })
});