require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");

module.exports = {
    urls: {
        _fast_register: '/register?redirect_url=/event/club-rakuten'
    },
    locators
}