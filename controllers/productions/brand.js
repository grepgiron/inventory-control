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
	//console.log(req.body);
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
	//console.log(req.params._id);
	Brand.findById(req.params._id, function (err, brand){
		if(err)
			res.json(err);
		res.json(brand);
	});
};


//--------- Actualizar marca ----------!
exports.update = function(req, res){
	//console.log(req.params._id);
	Brand.findById(req.params._id, function(err, brand){
		if(err)
			res.json(err);
		brand.name =req.body.name ? req.body.name : brand.name;
		brand.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Marca info update",
				marca: brand
			});
		});
	});
};

//--------- Borrar marca ----------!
exports.delete = function (req, res) {
    Brand.remove({
        _id: req.params._id
    }, function (err, brand) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Marca deleted'
        });
    });
};