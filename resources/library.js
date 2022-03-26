const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const shared = require ('./error');
const config = require("../config")
require('dotenv').config()


const initDriver = async () => {
    try {
        driver = await new Builder()
        .withCapabilities(config.capabilities[process.env.DRIVER])
        .usingServer(config.hostname)
        .build();
    }
    catch (error) {
        await shared.manageElementError('tapPerform', error);
    }
};

const getUrl = async (url) => {
    try {
        await driver.get(url);
      }
    catch (error) {
      await shared.manageElementError(url, error);
    }
};

const wait = async () => {
    try {
        await driver.manage().setTimeouts( { implicit: 10000 } );
    }
    catch (error) {
        await shared.manageError('wait implicit error', error);
    }
};


const findElement = async (element) => {
    try {
        await driver.findElement(By.css(element));
        let cookies = await driver.manage().getCookies();  
    //    console.log(cookies);
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const fillText = async (elm, element) => {
    try {
        let el = await driver.findElement(By.css(elm));
        await el.sendKeys(element);
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const click = async (element) => {
    try {
        await driver.findElement(By.css(element)).click()
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const maximizeWindow = async () => {
    try {
        await driver.manage().window().maximize();
    }
    catch (error) {
        await shared.manageError('maximise window error: ', error);
    }
};

const quitDriver = async () => {
    try {
        await driver.navigate().refresh();  
        await driver.quit();
    }
    catch (error) {
        await shared.manageError('quit driver error: ', error);
    }
};

const dismissAlert = async () => {
    try {
        //Click the link to activate the alert
        await driver.findElement(By.linkText('#batchsdk-ui-alert')).click();

        // Wait for the alert to be displayed
        await driver.wait(until.alertIsPresent());

        let alert = await driver.switchTo().alert();
        await alert.dismiss();
    }
    catch (error) {
        await shared.manageError('dismiss driver error: ', error);
    }
};

module.exports = {
    initDriver,
    getUrl,
    wait,
    fillText,
    maximizeWindow,
    quitDriver,
    findElement,
    click,
    dismissAlert
};