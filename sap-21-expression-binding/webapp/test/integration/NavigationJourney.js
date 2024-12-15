sap.ui.define([
    'sap/ui/test/opaQunit',
    './page/App',
], () => {
    'use strict';

    QUnit.module('Navigation');

    opaTest('Should open the Hello dialog', (Given, When, Then) => {
        Given.iStartMyUIComponent({
            componentConfig: {
                name: 'sap.ui.sap-21-expression-binding'
            }
        });

        //Actions
        When.onTheAppPage.iPressTheSayHelloWithDialogButton();

        // Assertions
        Then.onTheAppPage.iShouldSeeTheHelloDialog();

        // Cleanup
        Then.iTeardownMyApp();
    });
});