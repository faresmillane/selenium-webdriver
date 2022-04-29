const web = require('../resources/library/web');
const pages = require('./../tests/pages');

  const clearHomePagePopUp = async () => {
        await web.click(pages["home_page"].locators["cookies_accept"]);
    }

  module.exports = {
    clearHomePagePopUp,
};