require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");

module.exports = {
    urls: {
        _club_rakuten: '/event/club-rakuten'
    },
    locators
}