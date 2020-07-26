const rungoly = require("./index");
const message = "This is test message";
const options = {
    design: {
        char: "=",
        count: 100,
        lines: 3,
        fontColor: "yellow",
        backgroundColor: "magenta",
    },
    message: {
        align: "center",
        space: 1,
        text: message
    }
}
console.log(rungoly.printChar(options));
rungoly.log(options);