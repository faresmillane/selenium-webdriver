require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");

module.exports = {
    urls: {
        fast_register_page: '/event/club-rakuten',
        fast_register_sign_up: '/register?redirect_url=/event/club-rakuten',
    },
    locators
}