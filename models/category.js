const mongoose = require('mongoose');
const Schema = mongoose.Shema;


var CategorySchema = new Schema(
	{
		name: {	type: String, require: true, max: 100	}
	}
);

//Export Model
module.exports = mongoose.model('Category', CategorySchema);