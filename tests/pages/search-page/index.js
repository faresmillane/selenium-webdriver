require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");
const faker = require('../../../resources/data/faker');

module.exports = {
    urls: {
        search_page: `/search/${faker.randomProduct()}`,
    },
    locators
}