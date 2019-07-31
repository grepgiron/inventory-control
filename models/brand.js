const mongoose = require('mongoose');


var BrandSchema = mongoose.Schema(
	{
		name: {	type: String, require: true, max: 100	}
	}
);

//Export Model
module.exports = mongoose.model('Brand', BrandSchema);