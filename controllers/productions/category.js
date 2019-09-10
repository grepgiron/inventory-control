Category = require('../../models/productions/category.js');
 
 //---- Mostrar todos los categorias ------! 
exports.index = function(req, res) {
	Category.find({}, function(err, categories){
		if(err)
			res.status(500).send(err);
		res.status(200).send(categories);
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
		if(err)
			res.json(err);
		res.json(category);
	});
};

//---- Actualizar categoria ------! 
exports.update = function(req, res){
	Category.findByIdAndUpdate(req.params._id, req.body, {new: true}, function (err, category) {
		if	(err)	return res.status(500).send(err);
		res.status(200).send(category);
	})
};

//---- Borrar categoria ------! 
exports.delete = function (req, res) {
    Category.deleteOne({
        _id: req.params._id
    }, function (err, category) {
        if (err)
						res.send(err);
				res.json({
            status: "success",
        });
    });
};