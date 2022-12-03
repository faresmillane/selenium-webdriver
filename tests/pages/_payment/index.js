require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");

module.exports = {
    urls: {
        _payment: '/checkout?action=paymentprocessout',
        _oney: 'qlf-login.oney.fr/login',
        _paypal: 'www.sandbox.paypal.com',
        _processout: 'checkout.processout.com/',
        _klarna: 'https://pay.playground.klarna.com/',
        _validated_payment: '/checkout?action=paymentsuccess&purchaseId='
    },
    locators
}