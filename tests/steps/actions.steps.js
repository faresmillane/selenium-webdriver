/*********************************************************imports******************************************************/
require('dotenv').config()
const { Given, When, Then, setDefaultTimeout, BeforeAll, AfterAll } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);
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

  BeforeAll(async () => {
    await actions.init();
   });
  
  AfterAll(async () => {
    await actions.quitDriverWeb();
  });

/**********************************************************steps******************************************************/
/*******************************************************definitions***************************************************/

/*navigation*/
Given("I start my navigator in <{word}>", async (url) => {
  page = url;
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[url]}`);
  await actions.maximizeWindow();
  await utils.clearHomePagePopUp();
  await actions.wait(1000);
});

Given("I navigate to <{word}>", async (url) => {
  page = url;
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[url]}`);
});

Given("I access in the <{word}> screen", async (element) => {
  page = element;
  await utils.accessToGoodPage(`${process.env.BASE_URL}${pages[page].urls[element]}`);
});

Given("I access to <{word}> screen between <{word}> page", async (screen, page) => {
  await utils.accessToGoodPage(`${process.env.BASE_URL}${pages[page].urls[screen]}`);
});

Given("I am in the <{word}> screen", async (element) => {
  page = element;
  await actions.findElementWeb(pages[page].locators[element]);
});

/*find elements*/
Given("I see the <{word}> label", async (element) => {
  await actions.waitElement(pages[page].locators[element]);
  await actions.findElementWeb(pages[page].locators[element]);
});

/*clicks*/
Given("I click on the <{word}> button", async (element) => {
  await actions.waitElement(pages[page].locators[element]);
  await actions.clickWeb(pages[page].locators[element]);
});

Given("I click on my <{word}> <{word}> user", async (element, user) => {
  await actions.clickBox(pages[page].locators[data[user][element]]);
});

Given("I click on the <{word}> submit button", async (element) => {
  await actions.waitElement(pages[page].locators[element]);
  await actions.clickBox(pages[page].locators[element]);
});

/*data*/
Given("I am a <{word}> user", async (user) => {
  data[user] = await dataGen.getUser(user);
  await actions.wait(2000);
});

Given("I fill my <{word}> <{word}> user", async (element, user) => {
  await actions.waitElement(pages[page].locators[element]);
  await actions.fillTextWeb(pages[page].locators[element], data[user][element]);
});