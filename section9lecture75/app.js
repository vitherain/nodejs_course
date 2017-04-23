var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function(req, res, next) {
    console.log('Request URL: ', req.url);
    next();
});

app.get('/', function(req, res) {
    res.send('<html><head><link href="assets/style.css" rel=stylesheet /></head><body><h1>Hello world!!!</h1></body></body>');
});

app.get('/person/:id', function(req, res) {
    res.send(`<html><head></head><body><h1>${req.params.id}</h1></body></body>`);
});

app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);