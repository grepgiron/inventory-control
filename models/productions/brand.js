const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


var BrandSchema = mongoose.Schema(
	{
		name: String,
		description: String,
	},
);

//Export Model
BrandSchema.plugin(timestamps);

var Brand = module.exports = mongoose.model('Brand', BrandSchema);
module.exports.get = function (callback, limit) {
    Brand.find(callback).limit(limit);
}