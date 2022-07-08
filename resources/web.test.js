const { Builder, By, until } = require('selenium-webdriver');
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
    
    await driver.get('https://www4.rakqa.fr/offer?action=desc&aid=5196265710&productid=4203109223');
    await driver.manage().window().maximize();
    await driver.executeScript("var elm = document.getElementsByClassName('kml-modale')[0]; if (elm) elm.style.display='none';");
    await driver.executeScript("var elm = document.getElementsByClassName('didomi_accept_button')[0]; if (elm) elm.click();");
    await driver.executeScript("var elm = document.getElementsByClassName('didomi_accept_button btnStyle acceptAndCloseBtnStyle')[0]; if (elm) elm.click();");
    await driver.wait(until.elementLocated(By.className("addToCartBtn")), 10000);
    await driver.findElement(By.className("addToCartBtn")).click()
    await new Promise(resolve => setTimeout(resolve, 1000));
    await driver.get('https://www4.rakqa.fr/cart');
    await driver.wait(until.elementLocated(By.className("button_v2 buttonPrimary")), 10000);
    await driver.findElement(By.className("button_v2 buttonPrimary")).click();
    await driver.wait(until.elementLocated(By.id("auth_user_identifier")), 10000);
    let el = await driver.findElement(By.id("auth_user_identifier"))
    await el.sendKeys("rakuten.quality@gmail.com");
    el = await driver.findElement(By.id("userpassword"))
    await el.sendKeys("Rakuten2020");
    await driver.findElement(By.id("sbtn_login")).click();
    await new Promise(resolve => setTimeout(resolve, 10000));

    async function choiseLivraison(type) {
      const livraisons = await driver.executeScript(`return document.getElementsByClassName("fld_lbl shipping_row ")`);
      for (let i = 0; i < livraisons.length; i++) {
          let livraison = await driver.executeScript(`return document.getElementsByClassName("fld_lbl shipping_row ")[${i}]["innerText"]`);
          if(livraison.includes(type)) {
            await driver.executeScript(`document.getElementsByClassName("fld_lbl shipping_row ")[${i}].click()`);
          }
      }
    };

    await choiseLivraison("Chronopost");
    await driver.findElement(By.className("button_v2 buttonPrimary width_100 spacerTopS hasTooltipPop")).click()
    await driver.wait(until.elementLocated(By.className("processout-field-cc-iframe")), 10000);

    el = await driver.findElement(By.xpath("//div[@data-processout-input='cc-number']//iframe"));
    await driver.switchTo().frame(el);
    el = await driver.findElement(By.xpath("//input"));
    console.log(el)
    await el.sendKeys("4242424242424242");
    await driver.switchTo().frame(null);
    
    el = await driver.findElement(By.xpath("//div[@data-processout-input='cc-exp']//iframe"));
    await driver.switchTo().frame(el);
    el = await driver.findElement(By.xpath("//input"));
    await el.sendKeys("1226");
    await driver.switchTo().frame(null);
    
    el = await driver.findElement(By.xpath("//div[@data-processout-input='cc-cvc']//iframe"));
    await driver.switchTo().frame(el);
    el = await driver.findElement(By.xpath("//input"));
    console.log(el)
    await el.sendKeys("123");
    await driver.switchTo().frame(null);

    await driver.findElement(By.className("button_v2 buttonPrimary submit_btn loaderButton")).click()
   
    
    
    ///////////////////////////////////////////////////
    await new Promise(resolve => setTimeout(resolve, 10000));
//    await driver.quit();
    
    
  } finally {
    
  }
})();
