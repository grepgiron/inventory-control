Category = require('../../models/productions/category.js');
 
 //---- Mostrar todos los categorias ------! 
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
			categories: categories
		});
	});
};

 //---- Crear nueva categoria ------! 
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

 //---- Mostrar categoria ------! 
exports.view = function(req, res){
	Category.findById(req.params._id, function (err, category){
		console.log(req.params._id);
		if(err)
			res.json(err);
		res.json(category);
	});
};

//---- Actualizar categoria ------! 
exports.update = function(req, res){
	Category.findById(req.params._id, function(err, category){
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

//---- Borrar categoria ------! 
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