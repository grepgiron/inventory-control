Store = require('../../models/sales/store.js');

//---- Mostrar todos las  tiendas------!
exports.index = function(req, res) {
	Store.find({}, function(err, stores){
		if(err)
			res.status(500).send(err);
		res.status(200).send(stores);
	});
};

//----- Crear nueva tienda -------!
exports.create = (req, res) => {
	console.log(req.body);
	if(!req.body){
		return res.status(400).send({
			message: "Store content can not be empty"
		});
	}

	const store = new Store(req.body);

	store.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the store."
        });
	});
};

//----- Mostrar tienda -------!
exports.view = function(req, res){
	Store.findById(req.params._id, function (err, store){
		console.log(req.params._id);
		if(err)
			res.json(err);
		res.json(store);
	});
};

//--------- Actualizar tienda ----------!
exports.update = function(req, res){
	//console.log(req.params._id);
	Store.findById(req.params._id, function(err, store){
		if(err)
			res.json(err);
		store.name =req.body.name ? req.body.name : store.name;
		store.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Store info update",
				store: store
			});
		});
	});
};

//--------- Borrar tienda ----------!
exports.delete = function (req, res) {
    Store.remove({
        _id: req.params._id
    }, function (err, store) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Store deleted'
        });
    });
};