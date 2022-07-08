const { By, until } = require('selenium-webdriver');
const drivers = require("./drivers");
const shared = require ('../error');
const config = require("../../config");
require('dotenv').config();
let driver;

async function getElementByConsole (element) {
    try {
        let elm, isDisplayed;
        for (let i = 0; i < element.length; i++) {
          if(element[i].includes("ID=")) {
              elm = element[i].replace("ID=", "");
              isDisplayed = await driver.executeScript(`return document.getElementById('${elm}')`);
              if (isDisplayed) { return isDisplayed } else { shared.manageElementWarning(`ID=${elm}`) }
          } else if(element[i].includes("SELECTOR=")) {
              elm = element[i].replace("SELECTOR=", "");
              isDisplayed = await driver.executeScript(`return document.querySelector('${elm}');`);
              if (isDisplayed) { return isDisplayed } else { shared.manageElementWarning(`SELECTOR=${elm}`) }
          } else if (element[i].includes("XPATH=")) {
              elm = element[i].replace("XPATH=", "");
              isDisplayed = await driver.executeScript(`return document.evaluate("${elm}", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;`);
              if (isDisplayed) { return isDisplayed } else { shared.manageElementWarning(`XPATH=${elm}`) }
          } else if (element[i].includes("CLASS=")) {
              elm = element[i].replace("CLASS=", "");
              isDisplayed = await driver.executeScript(`return document.getElementsByClassName('${elm}')[0]`);
              if (isDisplayed) {
                isDisplayed = await driver.findElement(By.className(elm)); 
                return isDisplayed 
                } else { shared.manageElementWarning(`CLASS=${elm}`) }
          } else if (element[i].includes("NAME=")) {
              elm = element[i].replace("NAME=", "");
              isDisplayed = await driver.executeScript(`return document.getElementsByName('${elm}')`);
              if (isDisplayed) {
                isDisplayed = await driver.findElement(By.name(elm)); 
                return isDisplayed 
              } else { shared.manageElementWarning(`NAME=${elm}`) }
          }
      }
    }
    catch (error) {
        shared.manageElementError(error)
    }
}

async function getElement (element) {
        const timeout = config.timeout;
        let el, elm, isDisplayed, isError;
        for (let i = 0; i < element.length; i++) {
            try {
                if(element[i].includes("ID=")) {
                    elm = element[i].replace("ID=", "");
                    await driver.wait(until.elementLocated(By.id(elm)), timeout);
                    el = await driver.findElement(By.id(elm));
                    return el;
                };
            }
            catch (error) {
                isDisplayed = false;
                isError = error;
                shared.manageElementWarning(`ID=${elm}`);
            }
            finally {
                try {
                    if(element[i].includes("SELECTOR=")) {
                        elm = element[i].replace("SELECTOR=", "");
                        await driver.wait(until.elementLocated(By.css(elm)), timeout);
                        el = await driver.findElement(By.css(elm));
                        return el;
                    };
                }
                catch (error) {
                    isDisplayed = false;
                    isError = error;
                    shared.manageElementWarning(`SELECTOR=${elm}`);
                }
                finally {
                    try {
                        if(element[i].includes("XPATH=")) {
                            elm = element[i].replace("XPATH=", "");
                            await driver.wait(until.elementLocated(By.xpath(elm)), timeout);
                            el = await driver.findElement(By.xpath(elm));
                            return el;
                        };
                    }
                    catch (error) {
                        isDisplayed = false;
                        isError = error;
                        shared.manageElementWarning(`XPATH=${elm}`);
                    }
                    finally {
                        try {
                            if(element[i].includes("NAME=")) {
                                elm = element[i].replace("NAME=", "");
                                await driver.wait(until.elementLocated(By.name(elm)), timeout);
                                el = await driver.findElement(By.name(elm));
                                return el;
                            };
                        }
                        catch (error) {
                            isDisplayed = false;
                            isError = error;
                            shared.manageElementWarning(`NAME=${elm}`);
                        }
                        finally {
                            try {
                                if(element[i].includes("CLASS=")) {
                                    elm = element[i].replace("CLASS=", "");
                                    await driver.wait(until.elementLocated(By.className(elm)), timeout);
                                    el = await driver.findElement(By.className(elm));
                                    return el;
                                };
                            }
                            catch (error) {
                                isDisplayed = false;
                                isError = error;
                                shared.manageElementWarning(`CLASS=${elm}`);
                            }
                        }
                    }
                }
            }
        };
        if(isDisplayed == false) {
            await shared.manageElementError(isError);
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
        await shared.manageElementError('init driver error', error);
    }
};

const getUrl = async (url) => {
    try {
        await driver.get(url);
        
      }
    catch (error) {
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
            shared.manageElementError(element);
        };
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const fillText = async (elm, element) => {
    try {
        const el = await getElement(elm);
        await driver.executeScript("arguments[0].scrollIntoView(true);", el)
        await el.clear();
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
    let elm, level = 0, selector;
    for (let i = 0; i < element.length; i++) {
        if(element[i].includes("ID=")) {
            elm = element[i].replace("ID=", "");
            selector = 'id'
        } else if(element[i].includes("CLASS=")) {
            elm = element[i].replace("CLASS=", "");
            selector = 'class'
        } else if(element[i].includes("LEVEL=")) {
            level = element[i].replace("LEVEL=", "");
        }
    }
    try {
        if(selector == "class") {
            await driver.executeScript(`document.getElementsByClassName("${elm}")[${level}].click()`);
        } else {
            await driver.executeScript(`document.getElementById("${elm}").click()`);
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const selectLivraisonMode = async (type) => {
    let selector;
    process.env.DRIVER == 'mobile' ? selector = "ui-btn-text" : selector = "fld_lbl shipping_row ";
    try {
        const livraisons = await driver.executeScript(`return document.getElementsByClassName('${selector}')`);
        for (let i = 0; i < livraisons.length; i++) {
            let livraison = await driver.executeScript(`return document.getElementsByClassName('${selector}')[${i}]["innerText"]`);
            if(livraison.includes(type)) {
                await driver.executeScript(`document.getElementsByClassName('${selector}')[${i}].click()`);
            };
        };
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

const deleteAllCookies = async () => {
    try {
        await driver.manage().deleteAllCookies();
    }
    catch (error) {
        
    }
};

const popinsClose = async () => {
    try {
        await driver.executeScript("var elm = document.getElementsByClassName('kml-modale')[0]; if (elm) elm.style.display='none';");
        await driver.executeScript("var elm = document.getElementsByClassName('didomi_accept_button')[0]; if (elm) elm.click();");
        await driver.executeScript("var elm = document.getElementsByClassName('didomi_accept_button btnStyle acceptAndCloseBtnStyle')[0]; if (elm) elm.click();");
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

const takeScreenshot = async () => {
    try {
        const encodedString = await driver.takeScreenshot();
        return encodedString;
    }
    catch {
    }
}

const dismissAlert = async () => {
    try {
        await driver.findElement(By.linkText('#batchsdk-ui-alert')).click();
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
        const el = await getElement(element);
        if (el) { return }
    }
    catch (error) {
        await shared.manageError('waitToSeeElement error: ', error);
    }
};

const elementIsDisplayed = async (element) => {
    try {
        const el = await getElement(element);
        await el.isDisplayed();
        if (el) { return }
    }
    catch (error) {
        await shared.manageError('waitToSeeElement error: ', error);
    }
};

const switchToWindow = async (url) => {
    try {
        let URL;
        const originalWindow = await driver.getWindowHandle();
        await driver.wait(
            async () => (await driver.getAllWindowHandles()).length > 1,
            config.timeout
        );
        const windows = await driver.getAllWindowHandles();
        for (let i = 0; i < windows.length; i++) {
            if (windows[i] !== originalWindow) {
                await driver.switchTo().window(windows[i]);
                URL = await driver.getCurrentUrl();
                if(URL.includes(url)) {
                    return;
                };
            };
        };
    }
    catch (error) {
        await shared.manageError('switchTo error: ', error);
    }
};

const switchToFrame = async (element) => {
    try {
        if (element == null) {
            await driver.switchTo().frame(null);
        } else {
            const el = await getElement(element);
            await driver.switchTo().frame(el);
        }
    }
    catch (error) {
        await shared.manageError('switchTo error: ', error);
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
    popinsClose,
    takeScreenshot,
    deleteAllCookies,
    switchToWindow,
    switchToFrame,
    selectLivraisonMode
};