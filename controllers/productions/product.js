Product = require('../../models/productions/product.js');

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

	product.save()
	.then(data => {
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
			console.log(err);
		res.json(product);
	});
};

//-------- Acutalizar producto --------!
exports.update = function(req, res){
	Product.findById(req.params._id, function(err, product){
		if(err)
			res.json(err);
		product.name =req.body.name ? req.body.name : product.name;
		product.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Product info update",
				data: product
			});
		});
	});
};

//-------- Eliminar producto ------!
exports.delete = function (req, res) {
    Product.remove({
        _id: req.params._id
    }, function (err, product) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Product deleted'
        });
    });
};