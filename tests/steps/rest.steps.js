/*********************************************************imports******************************************************/
require('dotenv').config()
const { Given, setDefaultTimeout, AfterAll,setParallelCanAssign, BeforeAll } = require("@cucumber/cucumber");
setParallelCanAssign(function(pickleInQuestion, picklesInProgress) {
  // Only one pickle with the word (disable parallel) in the name can run at a time
  if (pickleInQuestion.name.includes("(disable parallel)")) {
    return picklesInProgress.every(p => !p.name.includes("(disable parallel)"));
  }
  // No other restrictions
  return true;
});
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