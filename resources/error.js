const util = require('util');
const fs = require('fs');
const writeFile = util.promisify(fs.writeFile);

const manageError = async (driver, element, error) => {
    let screenshot = driver.takeScreenshot();
    writeFile(`../screenshot/${element}.png`, screenshot, 'base64');
    console.log(error);
    throw new Error(`${element} : see more logs with verbose script`);
};

const manageElementError = async (driver, element, error) => {
    let screenshot = driver.takeScreenshot();
    writeFile(`../screenshot/${element}.png`, screenshot, 'base64');
    console.log(error);
    throw new Error(`This element : ${element} is not found, for more details use verbose script`);
};

module.exports = {
    manageError,
    manageElementError
};