const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');



var CategorySchema = mongoose.Schema(
	{
		name: {	type: String, require: true, max: 100	}
	}
);

CategorySchema.plugin(timestamps);

//Export Model
module.exports = mongoose.model('Category', CategorySchema);
module.exports.get = function (callback, limit) {
    Category.find(callback).limit(limit);
}