const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var Brand = mongoose.model('Brand');
var Category = mongoose.model('Category');


var ProductSchema = new Schema(
	{
		code: {	
			type: String, 
			require: true, 
			max: 100	
		},
		name: {	
			type: String,
			require: true, 
			max: 100	
		},
		brand: {	
			type: Schema.Types.ObjectId, 
			ref: 'Brand', 
			required: [true, 'Brand is required']	
		},
		category: {	
			type: Schema.Types.ObjectId, 
			ref: 'Category', 
			required: [true, 'Category is required']	
		},
		price: {	
			type: Schema.Types.Decimal128, 
			require: true 	
		}
	}
);

//Export Model
module.exports = mongoose.model('Product', ProductSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}