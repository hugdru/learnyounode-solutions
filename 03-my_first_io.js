const fs = require('fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 3) {
    return Error(`Expecting 3 arguments: ${node} ${script} file`)
}

const filePath = process.argv[2];

const fileString = fs.readFileSync(filePath, 'utf8');
console.log(countCharInString('\n', fileString));

function countCharInString(char, string) {
    let charCounter = 0;
    for (let i = 0; i < string.length; ++i) {
        if (string.charAt(i) == char) {
            ++charCounter;
        }
    }
    return charCounter;
}