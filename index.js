const { Builder } = require('selenium-webdriver');

(async function example() {
  var capabilities = {
    browserName: 'chrome',
    "goog:chromeOptions": {
      mobileEmulation: { "deviceName": "Nexus 5" },
      args: ["--no-sandbox", "--disable-dev-shm-usage"]
  }
  };    capabilities['goog:chromeOptions'].args.push("headless")
  console.log(capabilities)
        const driver = await new Builder()
        .usingServer("http://localhost:4444/")
        .withCapabilities(capabilities)
        .build();
  try {
    await driver.get('https://www4.rakqa.fr');
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    await new Promise(resolve => setTimeout(resolve, 5000));
  } finally {
    await driver.quit();
  }
})();