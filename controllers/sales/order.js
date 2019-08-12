Order = require('../../models/sales/order.js');

//---- Mostrar todo el order------!
exports.index = function(req, res) {
	Order.find()
	.exec(function(err, order){
		if(err)
			console.log(err);
		res.json(order);
	});
};

//----- Crear nuevo order -------!
exports.create = (req, res) => {
	console.log(req.body);
	if(!req.body){
		return res.status(400).send({
			message: "Order content can not be empty"
		});
	}

	const order = new Order(req.body);

	order.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the order."
        });
	});
};

//----- Mostrar order -------!
exports.view = function(req, res){
	Order.findById(req.params._id)
	.populate('customer', 'name')
	.populate('staff', 'name')
	.populate('products.product', 'name')
	.exec(function(err, order){
		if(err)
			console.log(err);
		res.json(order);
	});
};

//--------- Actualizar order ----------!
exports.update = function(req, res){
	//console.log(req.params._id);
	Order.findById(req.params._id, function(err, order){
		if(err)
			res.json(err);
		order.name =req.body.name ? req.body.name : order.name;
		order.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Order info update",
				order: order
			});
		});
	});
};

//--------- Borrar order ----------!
exports.delete = function (req, res) {
    Order.remove({
        _id: req.params._id
    }, function (err, order) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Order deleted'
        });
    });
};