const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var CategorySchema = new Schema(
	{
		name: {	type: String, require: true, max: 100	}
	}
);

//Export Model
module.exports = mongoose.model('category', CategorySchema);
module.exports.get = function (callback, limit) {
    Category.find(callback).limit(limit);
}