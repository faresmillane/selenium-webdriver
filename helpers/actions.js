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

  const clickWeb = async (element) => {
    await web.click(element);
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

  const clickBox = async (element) => {
    await web.clickBox(element);
  }

  const wait = async (time) => {
    await web.wait(time);
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
    clickBox,
    wait
};