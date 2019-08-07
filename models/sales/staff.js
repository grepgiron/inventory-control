const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


var StaffSchema = mongoose.Schema(
	{
		name: String,
		email: String,
		phone: String,
		active: { 
			type: Boolean 
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