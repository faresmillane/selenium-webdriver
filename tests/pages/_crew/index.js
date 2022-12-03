require('dotenv').config();
let locators;
process.env.DRIVER == 'mobile' ? locators = require("./locators.mobile") : locators = require("./locators.desktop");
const faker = require('../../../resources/data/faker');
const partner = faker.randomPartner();
module.exports = {
    urls: {
        _crew: `/?partner=${partner}`,
        _partner: `partner=${partner}&step=3`,
        _help_desk: `help.fr.shopping.rakuten.net`
    },
    locators
}