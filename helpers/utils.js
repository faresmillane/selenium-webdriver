const web = require('../resources/library/web');
require('dotenv').config()

  const clearHomePagePopUp = async () => {
    web.cookiesAccept()
  }

  module.exports = {
    clearHomePagePopUp,
};