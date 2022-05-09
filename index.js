const { Builder, By } = require('selenium-webdriver');

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
    el = await driver.findElement(By.className("didomi_accept_button notice-module_btnStyle_+Sh notice-module_acceptAndCloseBtnStyle_Tpr "))
    .click();
    await driver.get('https://www4.rakqa.fr/event/club-rakuten');
    await new Promise(resolve => setTimeout(resolve, 5000));
  } finally {
    await driver.quit();
  }
})();