const { By } = require('selenium-webdriver');
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
              driver = await drivers.chromedriver();
              break;
            case 'firefox':
                driver = await drivers.geckodriver();
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
        let el = await getElement(elm);
        await el.sendKeys(element);
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const click = async (element) => {
    try {
        let el = await getElement(element);
        await el.click()
    }
    catch (error) {
        await shared.manageElementError(element, error);
    }
};

const clickBox = async (element) => {
    try {
        await driver.executeScript(`document.getElementById("${element}").click()`);
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
    dismissAlert,
    clickBox
};