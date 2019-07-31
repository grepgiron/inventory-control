const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
	let apiRoutes = require('./routes/api-routes.js');

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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(cors());

app.use('/api', apiRoutes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
