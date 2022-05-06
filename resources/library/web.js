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
          let session;
          await driver.session_.then(function(sessionData) {
            session = sessionData.id_;
        });
        return session;
    }
    catch (error) {
        await shared.manageElementError('tapPerform', error);
    }
};

const getUrl = async (url) => {
    try {
        await driver.get(url);
        return await new Promise(resolve => setTimeout(resolve, 1000));
      }
    catch (error) {
      await shared.manageElementError(url, error);
    }
};

const wait = async (milliseconds) => {
    try {
        return await new Promise(resolve => setTimeout(resolve, 10));
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

const cookiesAccept = async (element) => {
    try {
        await driver.manage().addCookie({name:'didomi_token', value: 'eyJ1c2VyX2lkIjoiMTgwOTRkYTItMmRmNi02NzJkLTk2NGQtNGU3YjM5ZjAwZThjIiwiY3JlYXRlZCI6IjIwMjItMDUtMDVUMTU6MzQ6MTkuMzc1WiIsInVwZGF0ZWQiOiIyMDIyLTA1LTA1VDE1OjM0OjE5LjM3NVoiLCJ2ZXJzaW9uIjoyLCJwdXJwb3NlcyI6eyJlbmFibGVkIjpbImF1ZGllbmNlbS14ZWRlVTJnUSIsImRldmljZV9jaGFyYWN0ZXJpc3RpY3MiLCJnZW9sb2NhdGlvbl9kYXRhIl19LCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpTSmVwYktqRzciLCJjOmNvbnRlbnRzcXVhcmUiLCJjOnRmMS1kaWdpdGFsLWZhY3RvcnkiLCJjOmZyYW5jZXR2LWZGcDN5VVhwIiwiYzppbnRvemV3ZS1XZlUyeHQ0TCIsImM6dGlueWNsdWVzLTNLaHBZTjZrIiwiYzp0d2VuZ2F0Y2YtMlh0UXdoV2YiLCJjOnBlcnNvbmFsaS1VRHpSQzJKbSIsImM6cmF0dGNmdjIteTZWTFgyUW4iLCJjOmF0aW50ZXJuZS1jV1FLSGVKWiIsImM6aGV5ZGF5LWFDcTRtTDJBIl19LCJ2ZW5kb3JzX2xpIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIl19LCJhYyI6IkM2cUFHQUZrQW93THFnQUEuQzZxQUVBVVlGMVFBIn0='});
        await driver.manage().addCookie({name:'euconsent-v2', value: 'CPYfsMAPYfsMAAHABBENCNCsAP_AAH_AAAAAIttf_X__b3_j-_5_f_t0eY1P9_7__-0zjhfdt-8N3f_X_L8X42M7vF36pq4KuR4Eu3LBIQdlHOHcTUmw6okVrzPsbk2cr7NKJ7PEmnMbO2dYGH9_n93TuZKY7_____7z_v-v_v____f_7-3f3__5_3---_e_V_99zbn9_____9nP___9v-_9________giyASYal5AF2JY4Mm0aRQogRhWEh1AoAKKAYWiKwgdXBTsrgJ9QQsAEAqAjAiBBiCjBgEAAgEASERASAHggEQBEAgABAAqAQgAI2AQWAFgYBAAKAaFiBFAEIEhBkQERymBARIlFBPZWIJQd7GmEIdZYAUCj-ioQESgBAsDISFg5jgCQEuFkgWYoXyAEYIAAA.f_gAD_gAAAAA'});
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

const waitToSeeElement = async (element) => {
    try {
        let elm;
        for (let i = 0; i < element.length; i++) {
            if(element[i].includes("ID=")) {
                elm = element[i].replace("ID=", "");
                await driver.wait(until.elementLocated(By.id(elm)), 5000);
                return;
            } else if(element[i].includes("SELECTOR=")) {
                console.log("je fait quoi ici")
                elm = element[i].replace("SELECTOR=", "");
                await driver.wait(until.elementLocated(By.css(elm)), 5000);
                return;
            } else if (element[i].includes("XPATH=")) {
                elm = element[i].replace("XPATH=", "");
                await driver.wait(until.elementLocated(By.xpath(elm)), 5000);
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
                console.log("je fais quoi la")
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
    cookiesAccept
};