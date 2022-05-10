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
    await driver.get('https://www4.rakqa.fr');
    await driver.manage().window().maximize();
    
    await driver.get('https://www4.rakqa.fr/search/iphone');
    await new Promise(resolve => setTimeout(resolve, 5000));
    el = await driver.findElement(By.xpath("//*[@data-qa='sdt_h1']"))
    console.log(el);
    let encodedString = await driver.takeScreenshot();
    await fs.writeFileSync('./image.png', encodedString, 'base64');
  } finally {
    await driver.quit();
  }
})();
