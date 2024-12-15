sap.ui.define(() => {
    'use strict';

    return {
        neme: 'QUnit test suite for UI5 Walkthrough',
        defaults: {
            page: 'ui5://test-resources/sap/ui/sap-21-expression-binding/Test.qunit.html?testsuite={suite}&test={name}',
            quint: {
                version: 2
            },
            ui5: {
                theme: 'sap_horizon'
            },
            loader: {
                paths: {
                    'sap.ui.sap-21-expression-binding': '../'
                }
            }
        },
        tests: {
            'unit/unitTests': {
                title: 'UI5 - Unit Test',
            },
            "integration/opaTests": {
                title: "UI5 - Integration Tests"
            }
        }
    };
});