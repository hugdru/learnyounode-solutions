const http = require('http');
const fs = require('fs');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length < 3) {
    return Error(`Expecting 3 arguments: ${node} ${script} (url)+`)
}

const urls = process.argv.slice(2);
myGet(urls);

function myGet(urls) {
    const responses = [];
    let indexOfResponseToConsume = 0;

    urls.forEach((url, urlIndex) => {        
        http.get(url, (response) => {
            let message = '';

            response.setEncoding('utf8');

            response.on('data', (chunkString) => {
                message += chunkString;        
            });

            response.on('end', () => {
                responses[urlIndex] = message;
                while (responses[indexOfResponseToConsume]) {
                    console.log(responses[indexOfResponseToConsume]);
                    ++indexOfResponseToConsume;                   
                }      
            });
        });
    });
}