const config = require("./config")
module.exports = {
    default: `--parallel ${config.parallel} --format html:cucumber-report.html --publish-quiet`
  }