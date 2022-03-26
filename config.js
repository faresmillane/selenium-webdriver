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
    features: "",
    parallel: "5"
};