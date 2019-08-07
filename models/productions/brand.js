const mongoose = require('mongoose');


var BrandSchema = mongoose.Schema(
	{
		name: String,
		description: String
	}
);

//Export Model
var Brand = module.exports = mongoose.model('Brand', BrandSchema);
module.exports.get = function (callback, limit) {
    Brand.find(callback).limit(limit);
}