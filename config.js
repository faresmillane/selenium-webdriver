require('dotenv').config();

module.exports = {
    hostname: `http://localhost:${process.env.PORT || 4444}/`,
    capabilities: {
        chrome: {
            browserName: "chrome",
            "goog:chromeOptions": {
                args: []
            }
        },
        firefox: {
             browserName: "firefox",
             acceptSslCerts: true, 
             acceptInsecureCerts: true
        },
        edge: {
            browserName: "MicrosoftEdge",
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
    parallel: 4,
    retry: 1,
    timeout: 10000,
    htmlReport: false,
    jsonReport: true
};