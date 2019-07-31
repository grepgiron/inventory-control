const mongoose = require('mongoose');
const Schema = mongoose.Shema;


var ProductSchema = new Schema(
	{
		code: {	type: String, require: true, max: 100	},
		name: {	type: String, require: true, max: 100	},
		brand_id: {	type: Schema.Types.ObjectId, ref: 'Brand' require: true	},
		category_id: {	type: Schema.Types.ObjectId, ref: 'Category' require: true	},
		price: {	type: Decimal, require: true 	}
	}
);

//Export Model
module.exports = mongoose.model('Product', ProductSchema);