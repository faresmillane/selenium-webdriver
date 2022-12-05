require('dotenv').config()
const { Given, setDefaultTimeout, After, setParallelCanAssign, Before, BeforeStep, AfterStep } = require("@cucumber/cucumber");
setParallelCanAssign(function(pickleInQuestion, picklesInProgress) {
  // Only one pickle with the word (disable parallel) in the name can run at a time
  if (pickleInQuestion.name.includes("(disable parallel)")) {
    return picklesInProgress.every(p => !p.name.includes("(disable parallel)"));
  }
  return true;
});
setDefaultTimeout(100 * 2 * 1000);
const actions = require("../../helpers/actions");
const utils = require("../../helpers/utils");
const dataGen = require("../../helpers/data");
const pages = require('./../../tests/pages');
const encoding = 'utf8';
const mime_type = 'text/xml';
let data = {};

/***********************************************************global*****************************************************/

  Before(async function () {
    await actions.init();
    await actions.wait(2000);
   });
  
  BeforeStep(async function () {
    await utils.clearRandomPopin();
  });

  AfterStep( function ({result}, callback) {
        utils.takeScreenshot().then(screenshot => {
        this.attach(new Buffer.from(screenshot, 'base64'), 'image/png');
        callback();
      });
  });

  After(async function () {
    await actions.quitDriverWeb();
  });

/**********************************************************steps******************************************************/
/*******************************************************definitions***************************************************/

/*navigation*/
Given(/^I navigate to "(.*)" page$/, async function (page) {
  await this.attach(new Buffer.from(`navigate to : ${process.env.BASE_URL}${pages[page].urls[page]}`, encoding), mime_type);
  await actions.navigate(`${process.env.BASE_URL}${pages[page].urls[page]}`);
  const serverName = await utils.getServerName();
  if(serverName){
    await this.attach(new Buffer.from(`server info : ${serverName}`, encoding), mime_type);
  };
});

Given(/^I access in the "(.*)" page$/, async function (page) {
  if(!page.includes('_')) {
    await this.attach(new Buffer.from(`access to : ${page}`, encoding), mime_type);
    await utils.accessToGoodPage(`${page}`);
  } else {
    await this.attach(new Buffer.from(`access to : ${process.env.BASE_URL}${pages[page].urls[page]}`, encoding), mime_type);
    await utils.accessToGoodPage(`${process.env.BASE_URL}${pages[page].urls[page]}`);
  };
  await actions.wait(1000);
});

Given(/^I switch to "(.*)" "(.*)" between "(.*)" page$/, async function (name, type, page) {
  let handle;
  type == 'window' ? handle = pages[page].urls[name] : handle = pages[page].locators[name];
  await actions.switchTo(type, handle);
  await this.attach(new Buffer.from(`switch to : ${handle}`, encoding), mime_type);
});

/*find elements*/
Given(/^I see the "(.*)"."(.*)" label$/, async function (page, element) {
  await this.attach(new Buffer.from(`see element : ${pages[page].locators[element]}`, encoding), mime_type);
  await actions.waitElement(pages[page].locators[element]);
});

/*clicks*/
Given(/^I "(.*)" on the "(.*)"."(.*)" button$/, async function (action, page, element) {
  await this.attach(new Buffer.from(`click in : ${pages[page].locators[element]}`, encoding), mime_type);
  await actions.waitElement(pages[page].locators[element]);
  await actions.clickWeb(action, pages[page].locators[element]);
  await actions.wait(200);
});

/*data*/
Given(/^I am a "(.*)"."(.*)" user$/, async function (type, user) {
  data[process.pid] = await dataGen.getUser(user);
  await actions.wait(2000);
  await this.attach(new Buffer.from(`${user} ${type} infos : ${JSON.stringify(data[process.pid])}`, encoding), mime_type);
  if(user.includes('connected')){
    await utils.connectUser(data[process.pid]);
  };
});

Given(/^I write "(.*)" in the "(.*)"."(.*)" field$/, async function (dataName, page, element) {
  await actions.waitElement(pages[page].locators[element]);
  if(dataName == 'my_card_number' || dataName == 'my_card_expiration_date' || dataName == 'my_card_secret') {
    await actions.fillCardInformation(pages[page].locators[element], data[process.pid][dataName]);
  } else if(dataName == 'my_digit') {
    const digit = await utils.getOtpDigit();
    await this.attach(new Buffer.from(`fill my digit : ${digit} code`, encoding), mime_type);
    await utils.setOtpDigit(digit);
  } else if(!dataName.includes('_')) {
    await this.attach(new Buffer.from(`fill ${dataName} in : ${pages[page].locators[element]}`, encoding), mime_type);
    await actions.fillTextWeb(pages[page].locators[element], dataName);
  } else if(dataName == 'my_random_product') {
    const keyWord = await dataGen.randomProduct();
    await this.attach(new Buffer.from(`fill ${keyWord} in : ${pages[page].locators[element]}`, encoding), mime_type);
    await actions.fillTextWeb(pages[page].locators[element], keyWord);
  } else {
    await this.attach(new Buffer.from(`fill ${data[process.pid][dataName]} in : ${pages[page].locators[element]}`, encoding), mime_type);
    await actions.fillTextWeb(pages[page].locators[element], data[process.pid][dataName]);
  };
});

Given(/^I see "(.*)" text in the "(.*)"."(.*)" field$/, async function (expectedText, page, element) {
  await this.attach(new Buffer.from(`have ${expectedText} in : ${pages[page].locators[element]}`, encoding), mime_type);
  await actions.waitElement(pages[page].locators[element]);
  expectedText == await actions.getTextWeb(pages[page].locators[element]);
  await actions.wait(200);
});