require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");
const faker = require('../../../resources/data/faker');

module.exports = {
    urls: {
        account_page: '/user',
        advert_page: `${faker.iphoneProduct()}`
    },
    locators
}