require('dotenv').config()
const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);
const I = require("../helpers/actions");
const locator = require("../resources/locators");
let data = {
    unknow: {},
    new: {},
    registered: {}
  };
/***********************************************************/

Given("I open my navigator", async () => {
  //await I.runSeleniumServer();
  await I.init();
});

Given("I navigate to <{word}>", async (url) => {
  await I.navigate(process.env.BASE_URL);
});

Given("I see the <{word}> label", async (element) => {
  await I.findElementWeb(locator[element]);
  await I.quitDriverWeb();
});

Given("I am in the <{word}> screen", async (element) => {
  await I.findElementWeb(locator[element]);
});

Given("I click on the <{word}> button", async (element) => {
  await I.findElementWeb(locator[element]);
  await I.clickWeb(locator[element]);
});

Given("I access in the <{word}> screen", async (element) => {
  await I.findElementWeb(locator[element]);
});

Given("I am a <{word}> user", async (user) => {
  data[user] = await I.getUser(user)
});

Given("I fill my <{word}> <{word}> user", async (element, user) => {
  await I.fillTextWeb(locator[element], data[user][element]);
});