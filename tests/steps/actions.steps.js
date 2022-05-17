/*********************************************************imports******************************************************/
require('dotenv').config()
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

/*********************************************************local-data***************************************************/

let page;
let data = {
    unknow: {},
    new: {},
    registered: {}
  };

/***********************************************************global*****************************************************/

  BeforeAll(async function () {
    await actions.init();
   });
  
  BeforeStep(async function () {
    await utils.clearRandomPopin();
  });

  AfterStep( function ({result}, callback) {
//    if (result.status != 'PASSED') {
        utils.takeScreenshot().then(screenshot => {
        this.attach(new Buffer.from(screenshot, 'base64'), 'image/png');
        callback();
      });
//    };
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
  await actions.wait(1000);
});

Given("I navigate to {string}", async (url) => {
  page = url;
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[url]}`);
});

Given("I navigate to {string} in {string} page", async (url, page) => {
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[url]}`);
});

Given("I access in the {string} screen", async (element) => {
  page = element;
  await utils.accessToGoodPage(`${process.env.BASE_URL}${pages[page].urls[element]}`);
});

Given("I access to {string} screen between {string} page", async (screen, page) => {
  await utils.accessToGoodPage(`${process.env.BASE_URL}${pages[page].urls[screen]}`);
});

Given("I am in the {string} screen", async (element) => {
  page = element;
  await actions.findElementWeb(pages[page].locators[element]);
});

/*find elements*/
Given("I see the {string} label", async (element) => {
  await actions.waitElement(pages[page].locators[element]);
});

/*clicks*/
Given("I click on the {string} button", async (element) => {
  await actions.waitElement(pages[page].locators[element]);
  await actions.clickWeb(pages[page].locators[element]);
  await actions.wait(200);
});

Given("I click on my {string} {string} user", async (element, user) => {
  await actions.clickBox(pages[page].locators[data[user][element]]);
});

Given("I click on the {string} submit button", async (element) => {
  await actions.waitElement(pages[page].locators[element]);
  await actions.clickBox(pages[page].locators[element]);
});

/*data*/
Given("I am a {string} user", async (user) => {
  data[user] = await dataGen.getUser(user);
  await actions.wait(2000);
});

Given("I fill my {string} {string} user", async (element, user) => {
  await actions.waitElement(pages[page].locators[element]);
  await actions.fillTextWeb(pages[page].locators[element], data[user][element]);
});