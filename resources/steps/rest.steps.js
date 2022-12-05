require('dotenv').config()
const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const rest = require("../../helpers/rest");
const assert = require('node:assert');
let response;

let data = {
    unknow: {},
    new: {},
    registered: {}
  };
/***********************************************************/

Given("I call {string} api", async (api) => {
    await rest.init(api);
});

Given("I create a {string} user", async (user) => {
  response =  await rest.post();
  console.log(response.status)
});

Given("I have a {string} response", async (status) => {
  await assert.equal(response.status, status)
});