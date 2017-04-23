var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api/person/:id', function(req, res) {
    // get data from database
});

app.post('/api/person', jsonParser, function(req, res) {
    // save to database
});

app.delete('/api/person/:id', function(req, res) {
    // delete from database
});

app.listen(port);