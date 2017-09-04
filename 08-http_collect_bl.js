const http = require('http');
const bl = require('bl');
const fs = require('fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 3) {
    return Error(`Expecting 3 arguments: ${node} ${script} url`)
}

const url = process.argv[2];

http.get(url, (response) => {
    response.pipe(bl((err, buffer) => {
        const message = buffer.toString();
        console.log(message.length);
        console.log(message);
    }));
});