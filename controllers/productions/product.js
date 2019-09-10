Product = require('../../models/productions/product.js');
Stock = require('../../models/productions/stock.js')

 //---- Mostrar todos los productos ------!  
exports.index = function(req, res) {
	Product.find()
		.populate('brand', 'name')
		.populate('category', 'name')
		.exec(function(err, products){
			if(err)
				console.log(err);
			res.json(products);
		});
};

 //--------- Crear producto ------------!  
exports.create = (req, res) => {
	console.log(req.body);
	if(!req.body){
		return res.status(400).send({
			message: "Product content can not be empty"
		});
	}

	const product = new Product(req.body);

	var stockBody = {
		product: product
	};
	const stock = new Stock(stockBody);
	
	product.save()
	.then(data => {
		stock.save();
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the product."
        });
	});
};

 //----------- Mostrar producto --------!
exports.view = function(req, res){
	Product.findById(req.params._id)
	.populate('brand', 'name')
	.populate('category', 'name')
	.exec(function(err, product){
		if(err)
			res.send(err);
		res.json(product);
	});
};

//-------- Acutalizar producto --------!
exports.update = function(req, res){
	Product.findByIdAndUpdate(req.params._id, req.body, {new: true}, function (err, product) {
		if	(err)	return res.status(500).send(err);
		res.status(200).send(product);
	})
};

//-------- Eliminar producto ------!
exports.delete = function (req, res) {
    Product.deleteOne({
        _id: req.params._id
    }, function (err, product) {
        if (err)
						res.status(500).send(err);
				res.json({
            status: "success",
				});
    });
};