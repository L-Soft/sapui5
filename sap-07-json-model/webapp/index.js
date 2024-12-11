sap.ui.define([
    'sap/ui/core/mvc/XMLView',
], (XMLView) => {
    'use strict';

    XMLView.create({
        viewName: 'sap.ui.sap-07-json-model.view.App'
    }).then((oView) => {
        oView.placeAt("content")
    })
});