const { By, until } = require('selenium-webdriver');
const drivers = require("./drivers");
const shared = require ('../error');
require('dotenv').config()
let driver;

async function getElement (element) {
    try {
        let el, elm;
        for (let i = 0; i < element.length; i++) {
            try {
                if(element[i].includes("ID=")) {
                    elm = element[i].replace("ID=", "");
                    el = await driver.findElement(By.id(elm));
                    return el;
                };
            }
            catch (error) {
                shared.manageElementWarning(`ID=${elm}`);
            }
            finally {
                try {
                    if(element[i].includes("SELECTOR=")) {
                        elm = element[i].replace("SELECTOR=", "");
                        el = await driver.findElement(By.css(elm));
                        return el;
                    };
                }
                catch (error) {
                    shared.manageElementWarning(`SELECTOR=${elm}`);
                }
                finally {
                    try {
                        if(element[i].includes("XPATH=")) {
                            elm = element[i].replace("XPATH=", "");
                            el = await driver.findElement(By.xpath(elm));
                            return el;
                        };
                    }
                    catch (error) {
                        shared.manageElementWarning(`XPATH=${elm}`);
                    }
                    finally {
                        try {
                            if(element[i].includes("NAME=")) {
                                elm = element[i].replace("NAME=", "");
                                el = await driver.findElement(By.name(elm));
                                return el;
                            };
                        }
                        catch (error) {
                            shared.manageElementWarning(`NAME=${elm}`);
                        }
                        finally {
                            try {
                                if(element[i].includes("CLASS=")) {
                                    elm = element[i].replace("CLASS=", "");
                                    el = await driver.findElement(By.className(elm));
                                    return el;
                                };
                            }
                            catch (error) {
                                shared.manageElementWarning(`CLASS=${elm}`);
                            }
                        }
                    }
                }
            }
        };
    }
    catch (error) {
        shared.manageElementError(error)
    }
}

const initDriver = async () => {
    try {
        switch (process.env.DRIVER) {
            case 'chrome':
              driver = await drivers.chromedriver('desk');
              break;
            case 'firefox':
              driver = await drivers.geckodriver();
              break;
            case 'mobile':
              driver = await drivers.chromedriver('mob');
              break;
            default:
              console.log(`Sorry, we are not configuration for ${process.env.DRIVER}.`);
          }
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

const getCurrentUrl = async (expectedUrl) => {
    try {
        let currentUrl;
        do {
            currentUrl = await driver.getCurrentUrl();
            await wait(100);
            if (currentUrl = expectedUrl) {
                return currentUrl;
            }
        } while (await driver.getCurrentUrl() != expectedUrl);
    }
    catch (error) {
      await shared.manageElementError(error);
    };
};

const wait = async (milliseconds) => {
    try {
        return await new Promise(resolve => setTimeout(resolve, milliseconds));
    }
    catch (error) {
        throw Error;
    };
};


const findElement = async (element) => {
    try {
        const el = await getElement(element);
        if(el) {
            return el;
        } else {
            shared.manageElementError(element)
        }
        
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const fillText = async (elm, element) => {
    try {
        const el = await getElement(elm);
        await driver.executeScript("arguments[0].scrollIntoView(true);", el)
        await el.sendKeys(element);
        
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const click = async (element) => {
    try {
        let el = await getElement(element);
        await driver.executeScript("arguments[0].scrollIntoView(true);", el)
        await el.click()
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const clickBox = async (element) => {
    try {
        if(process.env.DRIVER == "mobile") {
            await driver.executeScript(`document.getElementsByClassName("ui-icon ui-icon-radio-off ui-icon-shadow")[0].click()`);
        } else {
            await driver.executeScript(`document.getElementById("${element}").click()`);
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const cookiesAccept = async () => {
    try {
        const element = "didomi_accept_button notice-module_btnStyle_+Sh notice-module_acceptAndCloseBtnStyle_Tpr "
        await driver.wait(until.elementLocated(By.className(element)), 5000);
        await driver.findElement(By.className(element))
        .click();
    }
    catch (error) {
        
    }
};

const popinsClose = async (element) => {
    try {
        await driver.executeScript(`document.getElementsByClassName("close")[0].click()`);
        await driver.executeScript(`document.getElementsByClassName("kml-modal-wrapper")[0]`);
        await driver.findElement(By.className("close")).click();
    }
    catch (error) {
        
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

const waitToSeeElement = async (element) => {
    try {
        let elm;
        for (let i = 0; i < element.length; i++) {
            if(element[i].includes("ID=")) {
                elm = element[i].replace("ID=", "");
                await driver.wait(until.elementLocated(By.id(elm)), 5000);
                await wait(100);
                return;
            } else if(element[i].includes("SELECTOR=")) {
                elm = element[i].replace("SELECTOR=", "");
                await driver.wait(until.elementLocated(By.css(elm)), 5000);
                await wait(100);
                return;
            } else if (element[i].includes("XPATH=")) {
                elm = element[i].replace("XPATH=", "");
                await driver.wait(until.elementLocated(By.xpath(elm)), 5000);
                await wait(100);
                return;
            } else if (element[i].includes("CLASS=")) {
                elm = element[i].replace("CLASS=", "");
                await driver.wait(until.elementLocated(By.className(elm)), 5000);
                await wait(100);
                return;
            } else if (element[i].includes("NAME=")) {
                elm = element[i].replace("NAME=", "");
                await driver.wait(until.elementLocated(By.name(elm)), 5000);
                await wait(100);
                return;
            }
        }
    }
    catch (error) {
        await shared.manageError('waitToSeeElement error: ', error);
    }
};

const elementIsDisplayed = async (element) => {
    try {
        let elm;
        for (let i = 0; i < element.length; i++) {
            if(element[i].includes("ID=")) {
                elm = element[i].replace("ID=", "");
                await driver.findElement(By.id(elm)).isDisplayed();
                return;
            } else if(element[i].includes("SELECTOR=")) {
                elm = element[i].replace("SELECTOR=", "");
                await driver.findElement(By.css(elm)).isDisplayed();
                return;
            } else if (element[i].includes("XPATH=")) {
                elm = element[i].replace("XPATH=", "");
                await driver.findElement(By.xpath(elm)).isDisplayed();
                return;
            }
        }
    }
    catch (error) {
        await shared.manageError('waitToSeeElement error: ', error);
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
    dismissAlert,
    clickBox,
    waitToSeeElement,
    elementIsDisplayed,
    cookiesAccept,
    getCurrentUrl,
    popinsClose
};