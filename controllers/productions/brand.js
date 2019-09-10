Brand = require('../../models/productions/brand.js');

//---- Mostrar todos los marcas ------! 
exports.index = function(req, res) {
	Brand.find({}, function(err, brands){
		if(err)
			res.status(500).send(err);
		res.status(200).send(brands);
	});
};

//-------- Crear nuevo marca --------!
exports.create = (req, res) => {
	if(!req.body){
		return res.status(400).send({
			message: "Brand content can not beempty"
		});
	}

	const brand = new Brand({
		name: req.body.name || "No brand name",
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

//--------- Mostrar marca ----------!
exports.view = function(req, res){
	Brand.findById(req.params._id, function (err, brand){
		if(err)
			res.json(err);
		res.json(brand);
	});
};

//--------- Actualizar marca ----------!
exports.update = function(req, res){
	Brand.findByIdAndUpdate(req.params._id, req.body, {new: true}, function (err, brand) {
		if	(err)	return res.status(500).send(err);
		res.status(200).send(brand);
	})
};

//--------- Borrar marca ----------!
exports.delete = function (req, res) {
    Brand.deleteOne({
        _id: req.params._id
    }, function (err, brand) {
        if (err)
						res.send(err);
				res.json({
					Status: 'Brand Delete'
				})
    });
};