//server.js

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');

require('./app_api/models/db');
require('./app_api/config/passport');
var routesApi = require('./app_api/routes/index');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));

app.use(passport.initialize());

app.use('/api', routesApi);
    
app.use(function(req, res) {
    res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({'message' : err.name + ": " + err.message});
    }
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

var http = require('http');

var port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);
    
    if(isNaN(port)) {
        return val;
    }
    
    if(port >= 0) {
        return port;
    }
    
    return false;
}

function onError(error) {
    if(error.syscall !== 'listen') {
        throw error;
    }
    
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port
    
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privliges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
}

console.log('Magic is happening on port ' + port);
exports = module.exports = app;