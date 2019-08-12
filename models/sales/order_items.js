const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var OrderItemsSchema = mongoose.Schema(
	{
		product: {
			type: Schema.Types.ObjectId,
			ref: 'Product'
		}
		quanty: Number,
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
);

OrderItemsSchema.plugin(timestamps);

//Export Model
var order_items = module.exports = mongoose.model('Order_Items', OrderItemsSchema);
module.exports.get = function (callback, limit) {
    order_items.find(callback).limit(limit);
}