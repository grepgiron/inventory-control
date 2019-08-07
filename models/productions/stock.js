const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var StockSchema = new Schema(
	{
		product_id: {	type: Schema.Types.ObjectId, ref: 'Product', require: true	},
		quanty: 	{	type: Number, require: true 	}
	}
);

//Export Model
module.exports = mongoose.model('Stock', StockSchema);
module.exports.get = function (callback, limit) {
    Stock.find(callback).limit(limit);
}