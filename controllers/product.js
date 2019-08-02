Product = require('../models/product.js');
 
exports.index = function(req, res) {
	Product.get(function(err, products) {
		if(err){
			res.json({
				status: "error",
				messafe: "error"
			});
		}
		res.json({
			status: "success",
			message: "products retrieved successfully",
			data: products
		});
	});
};

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
	Product.findById(req.params._id, function (err, product){
		if(err)
			res.json(err);
		res.json({
			message: "Product details",
			name: product.name,
			data: product
		});
	});
};

exports.update = function(req, res){
	Product.findById(req.paramas._id, function(err, product){
		if(err)
			res.json(err);
		product.name =req.body.name ? req.body.name : product.name;
		product.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Contact info update",
				data: product
			});
		});
	});
};


exports.delete = function (req, res) {
    Product.remove({
        _id: req.params._id
    }, function (err, product) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};