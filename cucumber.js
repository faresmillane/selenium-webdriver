const config = require("./config");
require('dotenv').config();
const fs = require('fs-extra');
let htmlReport, jsonReport, steps;

process.env.DRIVER === 'api' ? steps = 'resources/steps/rest.steps.js' : steps = 'resources/steps/actions.steps.js';
if(!fs.existsSync(`reports`)) { fs.mkdirSync(`reports`) };
fs.writeFile('./reports/warnings.json', '[]');
config.htmlReport ? htmlReport = `--format html:reports/cucumber-report-${process.env.DRIVER}.html ` : htmlReport = '';
config.jsonReport ? jsonReport = `--format json:reports/cucumber-report-${process.env.DRIVER}.json ` : jsonReport = '';

module.exports = {
    default: `--publish-quiet --require ${steps} --parallel ${config.parallel} ${htmlReport} ${jsonReport} --retry ${config.retry}`
}