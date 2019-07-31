const mongoose = require('mongoose');


var BrandSchema = mongoose.Schema(
	{
		name: {	type: String, require: true, max: 100	}
	}
);

//Export Model
var Brand = module.exports = mongoose.model('brand', BrandSchema);
module.exports.get = function (callback, limit) {
    Brand.find(callback).limit(limit);
}