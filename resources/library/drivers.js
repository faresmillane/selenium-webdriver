const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const edge = require('selenium-webdriver/edge');
const config = require("../../config");
require('dotenv').config();

const chromedriver = async () => {
    try {
        let capabilities = config.capabilities[process.env.DRIVER];
        capabilities['goog:chromeOptions'].args.push("window-size=1920,1080");
        if(config.headless) {
            capabilities['goog:chromeOptions'].args.push("headless", "disable-gpu", "--no-sandbox");
        };
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
            options = new firefox.Options().headless();
            options.addArguments('--no-sandbox');
            options.addArguments("window-size=1920,1080");
        } else {
            options = new firefox.Options();
            options.addArguments("window-size=1920,1080");
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

const edgedriver = async () => {
    try {
        if(config.headless) {
            options = new edge.Options().headless();
            options.addArguments('--no-sandbox');
            options.addArguments("window-size=1920,1080");
        } else {
            options = new edge.Options();
            options.addArguments("window-size=1920,1080");
        }
        const driver = await new Builder()
        .withCapabilities(config.capabilities[process.env.DRIVER])
        .usingServer(config.hostname)
        .setEdgeOptions(options)
        .build();
        return driver;
    }
    catch (error) {
        throw new Error(`error : ${error} in chromedriver`);
    }
};

module.exports = {
    chromedriver,
    geckodriver,
    edgedriver
};