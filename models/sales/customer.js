const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


var CustomerSchema = mongoose.Schema(
	{
		name: String,
		phone: String,
		email: String,
		rtn: String,
		address: String
	}
);

CustomerSchema.plugin(timestamps);

//Export Model
var Customer = module.exports = mongoose.model('Customer', CustomerSchema);
module.exports.get = function (callback, limit) {
    Customer.find(callback).limit(limit);
}