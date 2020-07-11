const FONT_COLORS = {
    "reset" : "\x1b[0m",
    "bright" : "\x1b[1m",
    "dim": "\x1b[2m",
    "underscore" : "\x1b[4m",
    "blink" : "\x1b[5m",
    "reverse" : "\x1b[7m",
    "hidden" : "\x1b[8m",
    "black" : "\x1b[30m",
    "red" : "\x1b[31m",
    "green" : "\x1b[32m",
    "yellow" : "\x1b[33m",
    "blue" : "\x1b[34m",
    "magenta" : "\x1b[35m",
    "cyan" : "\x1b[36m",
    "white" : "\x1b[37m"
}

const BACKGROUND_COLORS = {
    "black" : "\x1b[40m",
    "red" : "\x1b[41m",
    "green" : "\x1b[42m",
    "yellow" : "\x1b[43m",
    "blue" : "\x1b[44m",
    "magenta" : "\x1b[45m",
    "cyan" : "\x1b[46m",
    "white" : "\x1b[47m",
}

class Rungoly {
    printChar({ design, message }) {
        let str = "";
        let resultString = "";
        let spaceString = "";
        let lineString = "";

        const padding = design.count - message.text.length;
        for (let charCount=0; charCount<design.count; charCount++) {
            str += design.char;
        }

        for (let lineCount=0; lineCount<design.lines; lineCount++) {
            lineString += `${str}\n\r`;
        }

        for (let spaceCount=0; spaceCount<message.space; spaceCount++) {
            spaceString += `\n\r`;
        }

        resultString += lineString;
        resultString += spaceString;
        resultString += `${message.text}\n\r`;
        resultString += spaceString;
        resultString += lineString;

        return resultString;
    }

    log(options) {
        const logText = this.printChar(options);
        console.log(logText);
        // console.log("\x1b[1m\x1b[33mnnamdi\x1b[89m\x1b[22m")
        // console.log('\x1b[0m');
        // console.log('\x1b[47m%s\x1b[0m', "stringToMakeYellow");  //yellow
        // console.log('\x1b[35m%s\x1b[0m', 'I am cyan');  //cyan
    }
}

const rungoly = new Rungoly();

module.exports = rungoly;
