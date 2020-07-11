const rungoly = require("./index");
const message = "This is test message";
const options = {
    design: {
        char: "=",
        color: "green",
        count: 100,
        lines: 3
    },
    message: {
        align: "center",
        color: "pink",
        space: 1,
        text: message
    }
}
rungoly.log(options);