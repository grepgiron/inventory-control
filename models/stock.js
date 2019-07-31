const mongoose = require('mongoose');
const Schema = mongoose.Shema;


var StockSchema = new Schema(
	{
		product_id: {	type: Schema.Types.ObjectId, ref: 'Product', require: true	},
		quanty: 	{	type: Decimal, require: true 	}
	}
);

//Export Model
module.exports = mongoose.model('Stock', StockSchema);