var express = require('express');
var app = express();
var mysql = require('mysql');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	var con = mysql.createConnection({
		host: 'localhost',
		user: 'flyway',
		password: 'a',
		database: 'addressbook'
	}); 

	con.query('select * from addressbook.person p join addressbook.address a on p.address_id = a.id;', function (err, rows) {
		if (err) throw err;

		console.log(rows);
	});

	next(); 
});

htmlController(app);

apiController(app);

app.listen(port);