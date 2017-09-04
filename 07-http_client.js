const http = require('http');

const fs = require('fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 3) {
    return Error(`Expecting 3 arguments: ${node} ${script} url`)
}

const url = process.argv[2];

http.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', console.log);
});