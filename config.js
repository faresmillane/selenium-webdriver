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
    headless: true,
    features: "",
    parallel: 4,
    retry: 1,
    htmlReport: false,
    jsonReport: true
};