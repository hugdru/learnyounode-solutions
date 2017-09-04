const http = require('http');
const fs = require('fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 3) {
    return Error(`Expecting 3 arguments: ${node} ${script} port`)
}

const port = Number.parseInt(process.argv[2], 10);

const server = http.createServer((request, response) => {    
    request.addListener('data', (chunk) => {
        response.write(chunk.toString().toUpperCase());
    }).addListener('end', () => {
        response.end();
    });
});

server.listen(port);