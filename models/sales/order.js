const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var OrderSchema = mongoose.Schema(
	{
		customer: { 
			type: Schema.Types.ObjectId, 
			ref: 'Customer', 
			require: [true, 'Customer is require']
		},
		staff: { 
			type: Schema.Types.ObjectId, 
			ref: 'Staff', 
			require: [true, 'Staff is require']
		},
		store: { 
			type: Schema.Types.ObjectId, 
			ref: 'Store', 
			require: [true, 'Store is require']
		},
		products:[{
			product: {
				type: Schema.Types.ObjectId,
				ref: 'Product',
				require: [true, 'Store is require']
			},
			quanty: {
				type: Number
			},
			unit_value: {
		      type: String,
		      required: [true, 'Valor Unitario no puede estar vacio']
		    },
		    tax: {
		      type: String
		    },
		    discount_value: {
		      type: String
		    },
		    subtotal: {
		      type: String
		    },
		    total: {
		      type: String
		    }
		}],
		status_order: String,
		order_date: Date,
	}
);

OrderSchema.plugin(timestamps);

//Export Model
var Order = module.exports = mongoose.model('Order', OrderSchema);
module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
}