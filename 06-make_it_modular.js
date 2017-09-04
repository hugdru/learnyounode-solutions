const myfs = require('./06-my_fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 4) {
    throw new Error(`Expecting 2 arguments: ${node} ${script} directory extension`);
}

const directory = process.argv[2];
const extension = process.argv[3];

myfs(directory, extension, (err, filesInDirectory) => {
    if (err) {
        return console.log(err);
    }
    filesInDirectory.forEach(file => {
        console.log(file);
    });
});