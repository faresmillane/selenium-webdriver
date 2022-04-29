require('dotenv').config()
const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
setDefaultTimeout(60 * 1000);
const rest = require("../../helpers/rest");
let data = {
    unknow: {},
    new: {},
    registered: {}
  };
/***********************************************************/

Given("TEST: I open my navigator", async () => {
  //await actions.runSeleniumServer();
  //await actions.init();
  await rest.get("https://www.google.fr/")
});