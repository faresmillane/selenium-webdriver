const web = require('../resources/library/web');
const assert = require('node:assert');
const { authenticator } = require('otplib')
require('dotenv').config();
const pages = require('./../tests/pages');
const users = require('./../resources/data/users.data');

  const clearHomePage = async () => {
    await web.deleteAllCookies();
  };

  const clearRandomPopin = async () => {
    await web.popinsClose();
  };

  const accessToGoodPage = async (expectedUrl) => {
    const currentUrl = await web.getCurrentUrl(expectedUrl);
    currentUrl.includes(expectedUrl);
  };

  const takeScreenshot = async () => {
    const screenshot = await web.takeScreenshot();
    return screenshot;
  };

  const clearCookies = async () => {
    web.deleteAllCookies();
  };

  const getServerName = async () => {
    const serverName = await web.getServerName();
    return serverName;
  };

  const connectUser = async (user) => {
    const page = '_login';
    await web.getUrl(`${process.env.BASE_URL}${pages[page].urls[page]}`);
    await accessToGoodPage(`${process.env.BASE_URL}${pages[page].urls[page]}`);
    await web.fillText(pages[page].locators['_login_email'], user['my_login_email']);
    await web.fillText(pages[page].locators['_login_password'], user['my_login_password']);
    await web.click(pages[page].locators['_me_connecter']);
    await accessToGoodPage(`${process.env.BASE_URL}/user`);
  };

  const getOtpDigit = async () => {
    let secret;
    if(process.env.BASE_URL.includes('shopping.rakuten')){
      secret = process.env.OTP_PROD_SECRET
    } else {
      secret = users[process.env.DRIVER].otp.secret
    }
    const digit = await authenticator.generate(secret);
    return digit;
  };

  const setOtpDigit = async (digit) => {
    await web.fillText(pages['_otp'].locators['_digit'], digit);
  };

  module.exports = {
    clearHomePage,
    accessToGoodPage,
    takeScreenshot,
    clearCookies,
    clearRandomPopin,
    getServerName,
    connectUser,
    getOtpDigit,
    setOtpDigit
};