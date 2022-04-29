const config = require("./config");
require('dotenv').config();
module.exports = {
    default: `-b --require tests/steps/*.js --parallel ${config.parallel} --format html:cucumber-report-${process.env.DRIVER}.html --publish-quiet --retry ${config.retry}`
  }