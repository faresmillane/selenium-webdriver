const web = require('../resources/library/web');
const assert = require('node:assert');
require('dotenv').config()

  const clearHomePagePopUp = async () => {
    web.cookiesAccept();
    web.popinsClose();
  }

  const accessToGoodPage = async (expectedUrl) => {
    const currentUrl = await web.getCurrentUrl(expectedUrl);
    assert.strictEqual(expectedUrl, currentUrl)
  }

  module.exports = {
    clearHomePagePopUp,
    accessToGoodPage
};