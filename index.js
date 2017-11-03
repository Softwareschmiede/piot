const Express = require('express');

const piot = Express();
const http = require('http').Server(piot);
const io = require('socket.io')(http);

const ESP3 = require('esp3');


const esp = new ESP3();
esp.on('esp-data', function(data) {
    console.log(data);
});

esp.open();

piot.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>');
});

io.on('connection', function(socket) {
    console.log('a user connected');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});