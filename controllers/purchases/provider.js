Provider = require('../../models/purchases/provider.js');

//---- Mostrar todos los clientes ------!
exports.index = function(req, res) {
	Provider.find({}, function(err, providers){
		if(err)
			res.status(500).send(err);
		res.status(200).send(providers);
	});
};

//----- Crear nuevo Cliente -------!
exports.create = (req, res) => {
	console.log(req.body);
	if(!req.body){
		return res.status(400).send({
			message: "Provider content can not be empty"
		});
	}

	const provider = new Provider(req.body);

	provider.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the provider."
        });
	});
};

//----- Mostrar cliente -------!
exports.view = function(req, res){
	Provider.findById(req.params._id, function (err, provider){
		console.log(req.params._id);
		if(err)
			res.json(err);
		res.json(provider);
	});
};

//--------- Actualizar cliente ----------!
exports.update = function(req, res){
	//console.log(req.params._id);
	Provider.findById(req.params._id, function(err, provider){
		if(err)
			res.json(err);
		provider.name =req.body.name ? req.body.name : provider.name;
		provider.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Provider info update",
				provider: provider
			});
		});
	});
};

//--------- Borrar cliente ----------!
exports.delete = function (req, res) {
    Provider.remove({
        _id: req.params._id
    }, function (err, provider) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Provider deleted'
        });
    });
};