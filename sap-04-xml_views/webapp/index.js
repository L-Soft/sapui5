sap.ui.define([
    'sap/ui/core/mvc/XMLView',
], (XMLView) => {
    'use strict';

    XMLView.create({
        viewName: 'sap.ui.sap-04-xml_views.view.App'
    }).then((oView) => {
        oView.placeAt("content")
    })
});