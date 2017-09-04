const http = require('http');
const concatStream = require('concat-stream');
const fs = require('fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 3) {
    return Error(`Expecting 3 arguments: ${node} ${script} url`)
}

const url = process.argv[2];

http.get(url, (response) => {
    response.pipe(concatStream((buffer) => {
        const message = buffer.toString();
        console.log(message.length);
        console.log(message);
    }));
});