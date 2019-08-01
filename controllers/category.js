Category = require('../models/category.js');
 
exports.index = function(req, res) {
	Category.get(function(err, categories) {
		if(err){
			res.json({
				status: "error",
				messafe: "error"
			});
		}
		res.json({
			status: "success",
			message: "categories retrieved successfully",
			data: categories
		});
	});
};

exports.create = (req, res) => {
	if(!req.body){
		return res.status(400).send({
			message: "Category content can not be empty"
		});
	}

	const category = new Category({
		name: req.body.name || "No product name",
		description: req.body.description
	});

	category.save()
	.then(data => {
		console.log(data);
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the category."
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
	Category.findById(req.params._id, function (err, category){
		if(err)
			res.json(err);
		res.json({
			message: "Category details",
			name: category.name,
			data: category
		});
	});
};

exports.update = function(req, res){
	Category.findById(req.paramas._id, function(err, category){
		if(err)
			res.json(err);
		category.name =req.body.name ? req.body.name : category.name;
		category.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Category info update",
				data: category
			});
		});
	});
};


exports.delete = function (req, res) {
    Category.remove({
        _id: req.params._id
    }, function (err, category) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Category deleted'
        });
    });
};