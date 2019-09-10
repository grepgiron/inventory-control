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
		description: {	
			type: String, 
			require: true 	
		},
		date: {
			type: Schema.Types.Date,
			required: true,
		}
	}
);

KardexSchema.plugin(timestamps);

//Export Model
module.exports = mongoose.model('Kardex', KardexSchema);
module.exports.get = function (callback, limit) {
    Product.find(callback).limit(limit);
}