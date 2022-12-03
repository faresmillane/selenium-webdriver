require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");

module.exports = {
    urls: {
        _otp: '/buyers/otp/setup?redirectionUrl=%2Fusersecure%3Faction%3Dsecuritypreferences%26method%3DOTP&label',
    },
    locators
}