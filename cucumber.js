const config = require("./config");
require('dotenv').config();
const fs = require('fs-extra');
let htmlReport, jsonReport;

fs.existsSync(`reports`) ? fs.emptyDir(`reports`) : fs.mkdirSync(`reports`);
config.htmlReport ? htmlReport = `--format html:reports/cucumber-report-${process.env.DRIVER}.html ` : htmlReport = '';
config.jsonReport ? jsonReport = `--format json:reports/cucumber-report-${process.env.DRIVER}.json ` : jsonReport = '';

module.exports = {
    default: `--publish-quiet --require tests/steps/*.js --parallel ${config.parallel} ${htmlReport} ${jsonReport} --retry ${config.retry}`
  }