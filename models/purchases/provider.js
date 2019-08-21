const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


var ProviderSchema = mongoose.Schema(
	{
		name: String,
		phone: String,
		address: String,
		rtn: String,
		contact: String
	}
);

ProviderSchema.plugin(timestamps);

//Export Model
var Provider = module.exports = mongoose.model('Provider', ProviderSchema);
module.exports.get = function (callback, limit) {
    Provider.find(callback).limit(limit);
}