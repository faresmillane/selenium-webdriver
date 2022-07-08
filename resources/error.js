const fs = require("fs").promises;

const manageError = async (element) => {
    throw new Error(`${element} : see more logs with verbose script`);
};

const manageElementError = async (element) => {
    throw new Error(`This element : ${element} is not found, for more details use verbose script`);
};

const manageElementWarning = async (element) => {
    console.log('\n','\x1b[33m'+'warning'+'\033[37m'+` This element : ${element} is not found, please update it ...`);
    const file = await fs.readFile('./reports/warnings.json');
    warnings = JSON.parse(file);
    warnings.push(element);
    warnings = [...new Set(warnings)];
    await fs.writeFile('./reports/warnings.json', JSON.stringify(warnings, null, 4));
};

module.exports = {
    manageError,
    manageElementError,
    manageElementWarning
};