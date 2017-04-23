var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

apiController(app);

app.listen(port);