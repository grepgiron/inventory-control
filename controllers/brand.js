Brand = require('../models/brand.js');
 
exports.index = function(req, res) {
	Brand.get(function(err, brands) {
		if(err){
			res.json({
				status: "error",
				messafe: "error"
			});
		}
		res.json({
			status: "success",
			message: "Brands retrieved successfully",
			data: brands
		});
	});
};

exports.create = (req, res) => {
	console.log(req.body);
	console.log(res);
	if(!req.body){
		return res.status(400).send({
			message: "Brand content can not beempty"
		});
	}

	const brand = new Brand({
		name: req.body.name || "No product name",
		description: req.body.description
	});

	brand.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the brand."
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
	Brand.findById(req.params._id, function (err, brand){
		if(err)
			res.json(err);
		res.json({
			message: "Brand details",
			name: brand.name,
			data: brand
		});
	});
};

exports.update = function(req, res){
	Brand.findById(req.paramas._id, function(err, brand){
		if(err)
			res.json(err);
		brand.name =req.body.name ? req.body.name : brand.name;
		brand.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Contact info update",
				data: brand
			});
		});
	});
};


exports.delete = function (req, res) {
    Brand.remove({
        _id: req.params._id
    }, function (err, brand) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Contact deleted'
        });
    });
};