const web = require('../resources/library/web');
const assert = require('node:assert');
require('dotenv').config()

  const clearHomePage = async () => {
    await web.deleteAllCookies();
  }

  const clearRandomPopin = async () => {
    await web.popinsClose();
  }
  const accessToGoodPage = async (expectedUrl) => {
    const currentUrl = await web.getCurrentUrl(expectedUrl);
    assert.strictEqual(expectedUrl, currentUrl)
  }

  const takeScreenshot = async () => {
    const screenshot = await web.takeScreenshot();
    return screenshot;
  }

  const clearCookies = async () => {
    web.deleteAllCookies();
  }

  module.exports = {
    clearHomePage,
    accessToGoodPage,
    takeScreenshot,
    clearCookies,
    clearRandomPopin
};