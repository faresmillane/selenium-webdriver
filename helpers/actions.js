const web = require('../resources/library/web');

  const runSeleniumServer = async () => {
        await web.start();
    }

  const init = async () => {
    await web.initDriver();
  }

  const navigate = async (url) => {
    await web.getUrl(url);
    await web.wait();
    await web.maximizeWindow();
  }

  const fillTextWeb = async (element, text) => {
    await web.fillText(element, text);
  }

  const findElementWeb = async (element) => {
    await web.findElement(element);
  }

  const clickWeb = async (action, element) => {
    if (action == 'click') {
      await web.click(element);
    } else {
      await web.clickBox(element);
    }
  }

  const selectCheckbox = async (type, mode) => {
    if (mode == 'livraison') {
      await web.selectLivraisonMode(type);
    } else {
      await web.clickBox(element);
    }
  }

  const fillCardInformation = async (element, value) => {
    await web.switchToFrame(element);
    await web.fillText(["XPATH=//input"], value)
    await web.switchToFrame(null);
  }

  const quitDriverWeb = async () => {
    await web.quitDriver();
  }

  const dismissAlert = async () => {
    await web.dismissAlert();
  }

  const maximizeWindow = async () => {
    await web.maximizeWindow();
  }

  const wait = async (time) => {
    await web.wait(time);
  }

  const waitElement = async (element) => {
    await web.waitToSeeElement(element);
  }

  const isDisplayed = async (element) => {
    await web.elementIsDisplayed(element);
  }

  const switchTo = async (type, name) => {
    if (type == 'window') {
      const url = await web.switchToWindow(name);
      return url;
    } else if (type == 'frame') {
      await web.switchToFrame(name);
    }
  }

  module.exports = {
    runSeleniumServer,
    init,
    navigate,
    fillTextWeb,
    findElementWeb,
    clickWeb,
    quitDriverWeb,
    dismissAlert,
    maximizeWindow,
    wait,
    waitElement,
    isDisplayed,
    switchTo,
    selectCheckbox,
    fillCardInformation
};