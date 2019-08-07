Stock = require('../../models/productions/stock.js');
 
exports.index = function(req, res) {
	Stock.get(function(err, stocks) {
		if(err){
			res.json({
				status: "error",
				messafe: "error"
			});
		}
		res.json({
			status: "success",
			message: "stocks retrieved successfully",
			data: stocks
		});
	});
};

exports.create = (req, res) => {
	console.log(req.body);
	console.log(res);
	if(!req.body){
		return res.status(400).send({
			message: "Stock content can not be empty"
		});
	}

	const stock = new Stock({
		name: req.body.name || "No stock name",
		quanty: req.body.quanty
	});

	stock.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the stock."
        });
	});
};


/*exports.new = function(req, res){
	var brand = new Brand();
	brand.name = req.body.name ? req.body.name : brand.name;
	brand.save(function (err) {
        if (err)
        	res.json(err);
        res.json({
        	message: 'New brand created!',
        	data: brand
            });
    });
};*/

exports.view = function(req, res){
	Stock.findById(req.params._id, function (err, stock){
		console.log(req.params._id);
		if(err)
			res.json(err);
		res.json(stock);
	});
};

exports.update = function(req, res){
	Stock.findById(req.paramas._id, function(err, stock){
		if(err)
			res.json(err);
		stock.name =req.body.name ? req.body.name : stock.name;
		stock.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Contact info update",
				data: stock
			});
		});
	});
};


exports.delete = function (req, res) {
    Stock.remove({
        _id: req.params._id
    }, function (err, stock) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'stock deleted'
        });
    });
};