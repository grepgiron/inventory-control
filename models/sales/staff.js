const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var StaffSchema = mongoose.Schema(
	{
		name: String,
		email: String,
		phone: String,
		active: { 
			type: Boolean, default: true 
		},
		store: { 
			type: Schema.Types.ObjectId, 
			ref: 'Store', 
			required: [true, 'Store is required']
		}
	}
);

StaffSchema.plugin(timestamps);

//Export Model
var Staff = module.exports = mongoose.model('Staff', StaffSchema);
module.exports.get = function (callback, limit) {
    Staff.find(callback).limit(limit);
}