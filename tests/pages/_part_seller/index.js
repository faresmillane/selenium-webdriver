require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");

module.exports = {
    urls: {
        _part_seller: `/seller/sell-form`,
    },
    locators
}