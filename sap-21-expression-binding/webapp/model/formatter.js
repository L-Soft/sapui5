sap.ui.define([], () => {
    'use strict';

    return {
        statusText(sStatus) {
            const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            if (['A', 'B', 'C'].includes(sStatus?.toUpperCase())) {
                return oResourceBundle.getText("invoiceStatus" + sStatus);
            } else {
                return sStatus;
            }
        }
    };
});