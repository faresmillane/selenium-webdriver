const fs = require("fs").promises;
const newPages = require('./../tests/pages/index');
const newField = require('./../resources/data/field');

const autoComplete = async () => {
    let elements = Object.keys(newPages);
    let fields = Object.keys(newField);
    const file = await fs.readFile('./.vscode/settings.json', "utf8");
    let pages = JSON.parse(file);
    for (let i = 0; i < elements.length; i++) {
        pages["cucumberautocomplete.pages"][elements[i]] = `./tests/pages/${elements[i]}/locators.desktop.js`;
    };
    for (let i = 0; i < fields.length; i++) {
        pages["cucumberautocomplete.pages"][fields[i]] = "";
    };
    await fs.writeFile('./.vscode/settings.json', JSON.stringify(pages, '', 4));
};

autoComplete();