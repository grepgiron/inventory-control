Customer = require('../../models/sales/customer.js');

//---- Mostrar todos los clientes ------!
exports.index = function(req, res) {
	Customer.find({}, function(err, customers){
		if(err)
			res.status(500).send(err);
		res.status(200).send(customers);
	});
};

//----- Crear nuevo Cliente -------!
exports.create = (req, res) => {
	console.log(req.body);
	if(!req.body){
		return res.status(400).send({
			message: "Customer content can not be empty"
		});
	}

	const customer = new Customer(req.body);

	customer.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the customer."
        });
	});
};

//----- Mostrar cliente -------!
exports.view = function(req, res){
	Customer.findById(req.params._id, function (err, customer){
		console.log(req.params._id);
		if(err)
			res.json(err);
		res.json(customer);
	});
};

//--------- Actualizar cliente ----------!
exports.update = function(req, res){
	//console.log(req.params._id);
	Customer.findById(req.params._id, function(err, customer){
		if(err)
			res.json(err);
		customer.name =req.body.name ? req.body.name : customer.name;
		customer.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Customer info update",
				customer: customer
			});
		});
	});
};

//--------- Borrar cliente ----------!
exports.delete = function (req, res) {
    Customer.remove({
        _id: req.params._id
    }, function (err, brand) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Customer deleted'
        });
    });
};