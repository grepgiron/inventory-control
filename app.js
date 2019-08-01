const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const apiRoutes = require('./routes/api-routes.js');

//-----Connecting Database-------
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/inventory_management', { useNewUrlParser: true })
	.then(() => { 
		console.log('Database Connect') 
		},
		error => {
			console.log('Database could not be connect: ' + error)
		});

//-----Config Express------------
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.json());

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/api', apiRoutes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
