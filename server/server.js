const http = require('http');
const debug = require('debug')('http')
const app = require('./index');
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);
console.log('Server running on port ' + port);


function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + addr.port;
    debug('Listening on ' + bind);
}