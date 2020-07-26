const FONT_COLORS = {
    "reset" : "0",
    "bright" : "1",
    "dim": "2",
    "underscore" : "4",
    "blink" : "5",
    "reverse" : "7",
    "hidden" : "8",
    "black" : "30",
    "red" : "31",
    "green" : "32",
    "yellow" : "33",
    "blue" : "34",
    "magenta" : "35",
    "cyan" : "36",
    "white" : "37"
}

const BACKGROUND_COLORS = {
    "black" : "40",
    "red" : "41",
    "green" : "42",
    "yellow" : "43",
    "blue" : "44",
    "magenta" : "45",
    "cyan" : "46",
    "white" : "47",
}

const x1bString = (color) => { 
    return color ? `\x1b[${color}m` : `\x1b[0m`;
};

const messageSpace = (messageAlignment, designCount, messageCount) => {
    let space = "";
    let spaces = 0;

    switch (messageAlignment) {
        case "center": {
            spaces = Math.abs(messageCount - designCount)/2;
            break;
        }
        case "right": {
            spaces = Math.abs(messageCount - designCount);
            break;
        }
    }
    for (let spaceCount=1; spaceCount<=spaces; spaceCount++) {
        space += " ";
    }

    return space;
}

class Rungoly {
    printChar({ design, message }) {
        let characterString = "";
        let resultString = "";
        let spaceString = "";
        let lineString = "";
        let messageString = "";

        const padding = design.count - message.text.length;
        for (let charCount=0; charCount<design.count; charCount++) {
            characterString += design.char;
        }

        for (let lineCount=0; lineCount<design.lines; lineCount++) {
            if (lineCount === design.lines - 1) {
                lineString += `${characterString}`;
            } else {
                lineString += `${characterString}\n`;
            }
        }

        for (let spaceCount=0; spaceCount<message.space; spaceCount++) {
            if (spaceCount === 0) {
                spaceString += `\n\n`;
            } else {
                spaceString += `\n`;
            }
        }

        messageString = `${messageSpace(message.align, design.count, message.text.length)}${message.text}`;

        resultString = `${lineString}${spaceString}${messageString}${spaceString}${lineString}`;

        return resultString;
    }

    log(options) {
        const logText = this.printChar(options);
        let fontColor = "";
        let backgroundColor = "";

        if (options.design.fontColor) {
            fontColor = x1bString(FONT_COLORS[options.design.fontColor]);
        }

        if (options.design.backgroundColor) {
            backgroundColor = x1bString(BACKGROUND_COLORS[options.design.backgroundColor]);
        }
        
        console.log(`${fontColor}${backgroundColor}${logText}${x1bString()}`);
    }
}

const rungoly = new Rungoly();

module.exports = rungoly;
