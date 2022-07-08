require('dotenv').config();

module.exports = {
    hostname: "http://localhost:4444/",
    capabilities: {
        chrome: {
            browserName: "chrome",
            "goog:chromeOptions": {
                args: []
            }
        },
        firefox: {
             browserName: "firefox",
        },
        mobile: {
            browserName: 'chrome',
            "goog:chromeOptions": {
              mobileEmulation: { "deviceName": "Nexus 5" },
              args: []
          }
        }
    },
    headless: process.env.HEADLESS || false,
    features: "",
    parallel: process.env.PARALLEL || 5,
    retry: 1,
    timeout: 10000,
    htmlReport: false,
    jsonReport: true
};