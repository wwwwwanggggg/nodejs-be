const global = require("../global/globals")

function logger(req, res, next) {
    let codetext = ""

    if (res.statusCode < 300) {
        codetext = `${global.formatOutput.greenBackground} ${res.statusCode} ${global.formatOutput.resetStyle}`
    } else if (res.statusCode < 400) {
        codetext = `${global.formatOutput.blueBackground} ${res.statusCode} ${global.formatOutput.resetStyle}`
    }
    else if (res.statusCode < 500) {
        codetext = `${global.formatOutput.yellowBackground} ${res.statusCode} ${global.formatOutput.resetStyle}`
    } else {
        codetext = `${global.formatOutput.redBackground} ${res.statusCode} ${global.formatOutput.resetStyle}`
    }


    console.log(`${global.formatOutput.blueBackground}${global.formatOutput.whiteText} ${req.method} ${global.formatOutput.resetStyle}   ${req.url}  ` + codetext);
    next();
}

module.exports = logger