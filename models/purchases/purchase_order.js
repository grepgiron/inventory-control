const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

var PurchaseOrderSchema = mongoose.Schema(
	{
		provider: { 
			type: mongoose.Schema.Types.ObjectId, 
			ref: 'Provider', 
			require: [true, 'Customer is require']
		},
		number_order: {
			type: String
		},
		order_type: { 
			type: String
		},
		products:[{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product',
				require: [true, 'Store is require']
			},
			quantity: {
				type: Number
			},
			unit_value: {
		      type: String,
		      required: [true, 'Valor Unitario no puede estar vacio']
	    },
	    tax: {
	      type: String
	    },
	    subtotal: {
	      type: String
	    },
	    total: {
	      type: String
	    }
		}],
		purchase_date: Date,
	}
);

PurchaseOrderSchema.plugin(timestamps);

//Export Model
var PurchaseOrder = module.exports = mongoose.model('PurchaseOrder', PurchaseOrderSchema);
module.exports.get = function (callback, limit) {
    Order.find(callback).limit(limit);
}