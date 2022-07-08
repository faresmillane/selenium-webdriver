require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");

module.exports = {
    urls: {
        cart_page: '/cart',
        cart_shipping: '/cartshipping',
        cart_livraion: '/checkout?action=addressregister',
        cart_checkout: '/checkout/payment/processout',
        validated_payment: '/checkout?action=paymentsuccess&purchaseId='
    },
    locators
}