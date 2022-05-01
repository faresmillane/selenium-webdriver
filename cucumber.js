const config = require("./config");
require('dotenv').config();
let console, htmlReport, jsonReport, publish;
config.console ? console = '-f @cucumber/pretty-formatter' : console = '-f summary';
config.htmlReport ? htmlReport = `--format html:reports/cucumber-report-${process.env.DRIVER}.html ` : htmlReport = '';
config.jsonReport ? jsonReport = `--format json:reports/cucumber-report-${process.env.DRIVER}.json ` : jsonReport = '';
config.publish ? publish = '--publish-quiet' : publish = '';

module.exports = {
    default: `${console} --require tests/steps/*.js --parallel ${config.parallel} ${publish} ${htmlReport} ${jsonReport} --retry ${config.retry}`
  }