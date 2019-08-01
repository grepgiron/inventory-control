const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var ProductSchema = new Schema(
	{
		code: {	type: String, require: true, max: 100	},
		name: {	type: String, require: true, max: 100	},
		brand: {	type: Schema.Types.ObjectId, ref: 'Brand', require: true	},
		category: {	type: Schema.Types.ObjectId, ref: 'Category', require: true	},
		price: {	type: Schema.Types.Decimal128, require: true 	}
	}
);

//Export Model
module.exports = mongoose.model('Product', ProductSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}