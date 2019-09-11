Provider = require('../../models/purchases/provider.js');

//---- Mostrar todos los proveedores ------!
exports.index = function(req, res) {
	Provider.find({}, function(err, providers){
		if(err)
			res.status(500).send(err);
		res.status(200).send(providers);
	});
};

//----- Crear nuevo Proveedor -------!
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

//----- Mostrar Proveedor -------!
exports.view = function(req, res){
	Provider.findById(req.params._id, function (err, provider){
		console.log(req.params._id);
		if(err)
			res.json(err);
		res.json(provider);
	});
};

//--------- Actualizar Proveedor ----------!
exports.update = function(req, res){
	//console.log(req.params._id);
	Provider.findByIdAndUpdate(req.params._id, req.body, {new: true}, function (err, provider) {
		if	(err)	return res.status(500).send(err);
		res.status(200).send(provider);
	})
};

//--------- Borrar Proveedor ----------!
exports.delete = function (req, res) {
    Provider.deleteOne({
        _id: req.params._id
    }, function (err, provider) {
        if (err)
            res.send(err);
    });
};