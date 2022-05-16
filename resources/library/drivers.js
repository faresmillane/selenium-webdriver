const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const config = require("../../config");
require('dotenv').config()

const chromedriver = async () => {
    try {
        let capabilities = config.capabilities[process.env.DRIVER];
        if(config.headless) {
            capabilities['goog:chromeOptions'].args.push("headless", "disable-gpu", "--no-sandbox");
        }
        const driver = await new Builder()
        .withCapabilities(capabilities)
        .usingServer(config.hostname)
        .build();
        return driver;
    }
    catch (error) {
        throw new Error(`error : ${error} in chromedriver`);
    }
};

const geckodriver = async () => {
    try {
        if(config.headless) {
            options = new firefox.Options().setBinary()
            .headless();
            options.addArguments('--no-sandbox');
        } else {
            options = new firefox.Options()
        }
        const driver = await new Builder()
        .withCapabilities(config.capabilities[process.env.DRIVER])
        .usingServer(config.hostname)
        .setFirefoxOptions(options)
        .build();
        return driver;
      }
    catch (error) {
        throw new Error(`error : ${error} in geckodriver`);
    }
};

module.exports = {
    chromedriver,
    geckodriver
};