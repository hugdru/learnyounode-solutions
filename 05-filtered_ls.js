const fs = require('fs');
const path = require('path');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 4) {
    return Error(`Expecting 3 arguments: ${node} ${script} directory extension`);
}

const directory = process.argv[2];
const extension = process.argv[3];

const normalizedExtension = `.${extension}`;
fs.readdir(directory, (err, files) => {
    if (err) {
        return console.error(err);
    }

    files.forEach(file => {
        if (path.extname(file) === normalizedExtension) {
            console.log(file);
        }
    });
})