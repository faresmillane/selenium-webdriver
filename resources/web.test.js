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
    
    const elm = "navItemButton-module_label_ZAB helper_hide-BelowDesktop nowrap truncate";
    await driver.get('https://www1.rakqa.fr');
    await driver.manage().window().maximize();
    const text = await driver.findElement(By.className(elm)).getText();
    console.log(text)
    await driver.quit();
    
    
  } finally {
    
  }
})();