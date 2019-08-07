const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');


var OrderSchema = mongoose.Schema(
	{
		customer: { 
			type: Schema.Types.ObjectId, 
			ref: 'Customer', 
			require: [true, 'Customer is require']
		},
		status_order: String,
		order_date: Date,
	}
);

OrderSchema.plugin(timestamps);

//Export Model
var Order = module.exports = mongoose.model('Order', StaffSchema);
module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
}