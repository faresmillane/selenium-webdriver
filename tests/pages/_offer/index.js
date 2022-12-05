require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");
const faker = require('../../../resources/data/faker');

module.exports = {
    urls: {
        _offer: `/offer?action=desc&aid=5119458669&productid=3915704129`,
    },
    locators
}