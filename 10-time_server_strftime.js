const net = require('net');
const strftime = require('strftime');

const node = process.argv[0];
const script = process.argv[1];

if (process.argv.length != 3) {
    return Error(`Expecting 3 arguments: ${node} ${script} port`)
}

const port = Number.parseInt(process.argv[2], 10);

const server = net.createServer((socket) => {
    const date = new Date();
    const response = getFormattedDateTime(date);
    socket.end(`${response}\n`);
});

server.listen(port);

function getFormattedDateTime(date) {
    return strftime('%Y-%m-%d %H:%M');
}

function prependZero(number) {
    return ('0' + number.toString()).slice(-2);
}