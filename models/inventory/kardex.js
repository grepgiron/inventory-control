const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
//var Brand = mongoose.model('Brand');
//var Category = mongoose.model('Category');


var KardexSchema = mongoose.Schema(
	{
		product: {	
			type: Schema.Types.ObjectId, 
			ref: 'Product', 
			required: [true, 'Product is required']	
		},
		quanty: {	
			type: String,  
			required: true,
		},
		movement_type: {	
			type: String, 
			require: true 	
		}
	}
);

KardexSchema.plugin(timestamps);

//Export Model
module.exports = mongoose.model('Kardex', ProductSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}