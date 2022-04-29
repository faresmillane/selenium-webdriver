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
Given("I navigate to <{word}>", async (url) => {
  page = url;
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[url]}`);
//  await utils.clearHomePagePopUp();
  await actions.maximizeWindow();
});

Given("I access in the <{word}> screen", async (element) => {
  page = element;
  await actions.findElementWeb(pages[page].locators[element]);
});

Given("I am in the <{word}> screen", async (element) => {
  page = element;
  await actions.findElementWeb(pages[page].locators[element]);
});

/*find elements*/
Given("I see the <{word}> label", async (element) => {
  await actions.findElementWeb(pages[page].locators[element]);
});

/*clicks*/
Given("I click on the <{word}> button", async (element) => {
  await actions.findElementWeb(pages[page].locators[element]);
  await actions.clickWeb(pages[page].locators[element]);
});

Given("I click on my <{word}> <{word}> user", async (element, user) => {
  await actions.clickBox(pages[page].locators[data[user][element]]);
  return await new Promise(resolve => setTimeout(resolve, 6000));
});

Given("I click on the <{word}> submit button", async (element) => {
  await actions.clickBox(pages[page].locators[element]);
});

/*data*/
Given("I am a <{word}> user", async (user) => {
  data[user] = await dataGen.getUser(user);
});

Given("I fill my <{word}> <{word}> user", async (element, user) => {
  await actions.fillTextWeb(pages[page].locators[element], data[user][element]);
});