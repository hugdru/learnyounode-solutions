const http = require('http');
const url = require('url');
const fs = require('fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 3) {
    return Error(`Expecting 3 arguments: ${node} ${script} port`)
}

const port = Number.parseInt(process.argv[2], 10);

handlers = {};
handlers['/api/parsetime'] = (request, response, urlObject) => {
    timeApiWrapper(request, response, urlObject, (date) => {
        return JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        });
    });
};

handlers['/api/unixtime'] = (request, response, urlObject) => {
    timeApiWrapper(request, response, urlObject, (date) => {
        return JSON.stringify({
            unixtime: date.getTime()
        });
    }); 
};

function timeApiWrapper(request, response, urlObject, dateTransformer) {
    const date = new Date(urlObject.query.iso);
    response.writeHead(200, {'content-type': 'application/json'});
    response.end(dateTransformer(date));  
}

const server = http.createServer((request, response) => {
    const urlObject = url.parse(request.url, true);

    const pathname = urlObject.pathname;
    if (!handlers[pathname]) {
        response.writeHead(404, http.STATUS_CODES[400]);
    }

    handlers[pathname](request, response, urlObject);
});

server.listen(port);