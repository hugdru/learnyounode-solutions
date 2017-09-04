const http = require('http');
const fs = require('fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 4) {
    return Error(`Expecting 4 arguments: ${node} ${script} port file`)
}

const port = Number.parseInt(process.argv[2], 10);
const file = process.argv[3];

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type': 'text/plain'});
    const fileStream = fs.createReadStream(file);
    fileStream.pipe(response);
});

server.listen(port);