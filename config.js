module.exports = {
    hostname: "http://localhost:4444/",
    capabilities: {
        chrome: {
            browserName: "chrome",
        //    chromeOptions: {
        //        mobileEmulation: { 
        //          deviceName: "Galaxy S5",
        //        }
        //    }
        },
        firefox: {
             browserName: "firefox",
        //     firefoxOptions: {
        //        mobileEmulation: { 
        //          deviceName: "Galaxy S5",
        //        }
        //    }
        },
    },
    headless: true,
    features: "",
    parallel: 8,
    retry: 0,
    console: true,
    htmlReport: false,
    jsonReport: true,
    publish: false
};