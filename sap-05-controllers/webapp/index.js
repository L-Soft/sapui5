sap.ui.define([
    'sap/ui/core/mvc/XMLView',
], (XMLView) => {
    'use strict';

    XMLView.create({
        viewName: 'sap.ui.sap-05-controllers.view.App'
    }).then((oView) => {
        oView.placeAt("content")
    })
});