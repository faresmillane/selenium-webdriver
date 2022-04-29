const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const config = require("../../config");
require('dotenv').config()

const chromedriver = async () => {
    try {
        options = new chrome.Options();
        if(config.headless) {
            options.addArguments('headless'); 
            options.addArguments('disable-gpu');
        }
        const driver = await new Builder()
        .withCapabilities(config.capabilities[process.env.DRIVER])
        .usingServer(config.hostname)
        .setChromeOptions(options)
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
            options = new firefox.Options().headless();
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