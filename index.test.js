const rungoly = require("./index");
const message = "This is test message";
const options = {
    design: {
        char: "=",
        color: "green",
        count: 100,
        lines: 1
    },
    message: {
        align: "center",
        color: "pink",
        space: 0,
        text: message
    }
}

const resultString = `====================================================================================================\n\rThis is test message\n\r====================================================================================================
`;

test('Print char', () => {
    console.log(rungoly.printChar(options));
    expect(rungoly.printChar(options)).toMatch(resultString);
  });