const fs = require('fs-extra');
require('dotenv').config();

fs.readFile(`./reports/cucumber-report-${process.env.DRIVER}.json`, 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return
    }
    const stream = JSON.parse(jsonString);
    for (var i=0 ; i < stream.length ; i++) {
        for (var j=0 ; j < stream[i].elements.length ; j++) {
            for (var k=0 ; k < stream[i].elements[j].steps.length ; k++) { 
                if(stream[i].elements[j].steps[k].result.status == 'failed') {
                    console.log(`${process.env.DRIVER} tests failed`);
                    return;
                } 
            }
        }
    }
    console.log(`${process.env.DRIVER} tests passed`);
})
