Stock = require('../../models/productions/stock.js');
 
//---- Mostrar todos las cantidades ------!  
exports.index = function(req, res) {
	Stock.find()
	.populate('product', 'name price')
	.exec(function(err, products){
		if(err)
			console.log(err);
		res.json(products);
	});
};

//---- Crear nuevas cantidades ------! 
exports.create = (req, res) => {
	if(!req.body){
		return res.status(400).send({
			message: "Stock content can not be empty"
		});
	}

	const stock = new Stock(req.body);

	stock.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the stock."
        });
	});
};

//---- Mostrar cantidades de un producto ------! 
exports.view = function(req, res){
	Stock.findById(req.params._id)
		.populate('product', 'name')
		.exec(function (err, stock){
		
		if(err)
			res.json(err);
		res.json(stock);
	});
};

//---- Actualizar cantidades ------! 
exports.update = function(req, res){
	Stock.findById(req.paramas._id, function(err, stock){
		if(err)
			res.json(err);
		stock.name =req.body.name ? req.body.name : stock.name;
		stock.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Stock info update",
				data: stock
			});
		});
	});
};

//---- Borrar Catidades ------! 
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