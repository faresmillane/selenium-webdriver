/*********************************************************imports******************************************************/
require('dotenv').config();
const { Given, setDefaultTimeout, AfterAll,setParallelCanAssign, BeforeAll, BeforeStep, AfterStep } = require("@cucumber/cucumber");
setParallelCanAssign(function(pickleInQuestion, picklesInProgress) {
  // Only one pickle with the word (disable parallel) in the name can run at a time
  if (pickleInQuestion.name.includes("(disable parallel)")) {
    return picklesInProgress.every(p => !p.name.includes("(disable parallel)"));
  }
  // No other restrictions
  return true;
});
setDefaultTimeout(100 * 2 * 1000);
const actions = require("../../helpers/actions");
const utils = require("../../helpers/utils");
const dataGen = require("../../helpers/data");
const pages = require('./../pages');
const encoding = 'utf8';
const mime_type = 'text/xml';

/*********************************************************local-data***************************************************/

let page;
let data = {
    unknow: {},
    new: {},
    registered: {},
    seller: {}
  };

/***********************************************************global*****************************************************/

  BeforeAll(async function () {
    await actions.init();
   });
  
  BeforeStep(async function () {
    await utils.clearRandomPopin();
  });

  AfterStep( function ({result}, callback) {
  //  if (result.status != 'PASSED') {
        utils.takeScreenshot().then(screenshot => {
        this.attach(new Buffer.from(screenshot, 'base64'), 'image/png');
        callback();
      });
//  };
  });

  AfterAll(async function () {
    await actions.quitDriverWeb();
  });

/**********************************************************steps******************************************************/
/*******************************************************definitions***************************************************/

/*navigation*/
Given("I start my navigator in {string}", async (url) => {
  page = url;
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[url]}`);
  await actions.maximizeWindow();
  await utils.clearHomePage();
  await actions.wait(2000);
});

Given("I navigate to {string}", async function (url) {
  page = url;
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[url]}`);
  await this.attach(new Buffer.from(`navigate to : ${process.env.BASE_URL}${pages[page].urls[url]}`, encoding), mime_type);
});

Given("I navigate to {string} in {string} page", async function (url, page) {
  page = page;
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[url]}`);
  await this.attach(new Buffer.from(`navigate to : ${process.env.BASE_URL}${pages[page].urls[url]}`, encoding), mime_type);
});

Given("I access in the {string} screen", async function (element) {
  page = element;
  await utils.accessToGoodPage(`${process.env.BASE_URL}${pages[page].urls[element]}`);
  await this.attach(new Buffer.from(`access to : ${process.env.BASE_URL}${pages[page].urls[element]}`, encoding), mime_type);
});

Given("I access to {string} screen between {string} page", async function (screen, page) {
  await utils.accessToGoodPage(`${process.env.BASE_URL}${pages[page].urls[screen]}`);
  await this.attach(new Buffer.from(`access to : ${process.env.BASE_URL}${pages[page].urls[screen]}`, encoding), mime_type);
});

Given("I am in the {string} screen", async function (element) {
  page = element;
  await actions.findElementWeb(pages[page].locators[element]);
  await this.attach(new Buffer.from(`see element : ${pages[page].locators[element]}`, encoding), mime_type);
});

Given("I switch to {string} {string} between {string} page", async function (name, type, page) {
  let handle;
  type == 'window' ? handle = pages[page].urls[name] : handle = pages[page].locators[name];
  await actions.switchTo(type, handle);
  await this.attach(new Buffer.from(`switch to : ${handle}`, encoding), mime_type);
});

/*find elements*/
Given("I see the {string} label", async function (element) {
  await actions.waitElement(pages[page].locators[element]);
  await this.attach(new Buffer.from(`see element : ${pages[page].locators[element]}`, encoding), mime_type);
});

/*clicks*/
Given("I {string} on the {string} button", async function (action, element) {
  await actions.waitElement(pages[page].locators[element]);
  await actions.clickWeb(action, pages[page].locators[element]);
  await actions.wait(2000);
  await this.attach(new Buffer.from(`click in : ${pages[page].locators[element]}`, encoding), mime_type);
});

Given("I select the {string} {string} checkbox", async function (type, mode) {
  await actions.selectCheckbox(type, mode);
  await this.attach(new Buffer.from(`select : ${type} : ${mode}`, encoding), mime_type);
});

Given("I click on my {string} {string} user", async function (element, user) {
  await actions.clickWeb('box', pages[page].locators[data[user][element]]);
  await this.attach(new Buffer.from(`click in : ${pages[page].locators[data[user][element]]}`, encoding), mime_type);
});

/*data*/
Given("I am a {string} user", async function (user) {
  data[user] = await dataGen.getUser(user);
  await actions.wait(2000);
  await this.attach(new Buffer.from(`${user} user infos : ${JSON.stringify(data[user])}`, encoding), mime_type);
});

Given("I fill my {string} {string} user", async function (element, user) {
  await actions.waitElement(pages[page].locators[element]);
  if(element == 'card_number' || element == 'card_expiration_date' || element == 'card_secret') {
    await actions.fillCardInformation(pages[page].locators[element], data[user][element]);
  } else {
    await actions.fillTextWeb(pages[page].locators[element], data[user][element]);
    await this.attach(new Buffer.from(`fill ${data[user][element]} in : ${pages[page].locators[element]}`, encoding), mime_type);
  }
});