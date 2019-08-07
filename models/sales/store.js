const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


var StoreSchema = mongoose.Schema(
	{
		name: String,
		phone: String,
		email: String,
		city: String,
		street: String,
		state: String
	}
);

StoreSchema.plugin(timestamps);

//Export Model
var Store = module.exports = mongoose.model('Store', StoreSchema);
module.exports.get = function (callback, limit) {
    Store.find(callback).limit(limit);
}