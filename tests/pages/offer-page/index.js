require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");
const faker = require('../../../resources/data/faker');

module.exports = {
    urls: {
        offer_page: `/offer?action=desc&aid=5196265710&productid=4203109223`,
    },
    locators
}