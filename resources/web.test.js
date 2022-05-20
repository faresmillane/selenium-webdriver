const { Builder, By } = require('selenium-webdriver');
const fs = require('fs-extra');

(async function example() {
  var capabilities = {
    browserName: 'chrome',
    "goog:chromeOptions": {
//      mobileEmulation: { "deviceName": "Nexus 5" },
      args: ["--no-sandbox", "--disable-dev-shm-usage"]
  }
  }; 
        const driver = await new Builder()
        .usingServer("http://localhost:4444/")
        .withCapabilities(capabilities)
        .build();
  try {
    setTimeout(async function(){
      const test = await driver.executeScript(`return document.querySelector('#header');`);
      if(test) {
        console.log(test);
      } else {
        console.log("il nest pas la")
      }
      return test;
  },10) //5 seconds
  
    await driver.get('https://www4.rakqa.fr');
    await driver.manage().window().maximize();
   
    const test = await driver.executeScript(`return document.getElementById("header")`);
    const test2 = await driver.executeScript(`return document.evaluate("//*[@id='header']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;`);
    //const test3 = await driver.executeScript(`return document.querySelector('#header');`);
    ///////////////////////////////////////////////////
    let elm;
    const timeout = 10000;
    for (let i = 0; i < element.length; i++) {
      if(element[i].includes("ID=")) {
          elm = element[i].replace("ID=", "");
          await driver.wait(until.elementLocated(By.id(elm)), timeout);
          await wait(100);
          return;
      } else if(element[i].includes("SELECTOR=")) {
          elm = element[i].replace("SELECTOR=", "");
          await driver.wait(until.elementLocated(By.css(elm)), timeout);
          await wait(100);
          return;
      } else if (element[i].includes("XPATH=")) {
          elm = element[i].replace("XPATH=", "");
          await driver.wait(until.elementLocated(By.xpath(elm)), timeout);
          await wait(100);
          return;
      } else if (element[i].includes("CLASS=")) {
          elm = element[i].replace("CLASS=", "");
          await driver.wait(until.elementLocated(By.className(elm)), timeout);
          await wait(100);
          return;
      } else if (element[i].includes("NAME=")) {
          elm = element[i].replace("NAME=", "");
          await driver.wait(until.elementLocated(By.name(elm)), timeout);
          await wait(100);
          return;
      }
  }
    ///////////////////////////////////////////////////
    await new Promise(resolve => setTimeout(resolve, 5000));
    
  } finally {
    await driver.quit();
  }
})();
