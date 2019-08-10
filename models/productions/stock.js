const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;


var StockSchema = mongoose.Schema(
	{
		product: {	type: Schema.Types.ObjectId, ref: 'Product', require: true	},
		quanty: 	{	type: Number, require: true 	}
	}
);

StockSchema.plugin(timestamps);
//Export Model
module.exports = mongoose.model('Stock', StockSchema);
module.exports.get = function (callback, limit) {
    Stock.find(callback).limit(limit);
}