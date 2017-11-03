const Express = require('express');

const app = Express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const ESP3 = require('esp3');


const esp = new ESP3();
esp.on('esp-data', function(data) {
    console.log(data);
});

esp.on('esp-error', function(err) {
    console.log(err);
});

esp.open();


app.use(Express.static(__dirname + '/public'));

app.get('/api/', function(req, res) {
    res.send('<h1>Hello World</h1>');
});

io.on('connection', function(socket) {
    console.log('a user connected');
});

http.listen(3000, function() {
    console.log('listening on *:3000');
});