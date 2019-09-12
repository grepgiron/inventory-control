PurchaseOrder = require('../../models/purchases/purchase_order.js');
Kardex = require('../../models/inventory/kardex.js');
productMovement = require('../../helpers/product_movement_helper');

//---- Mostrar todos las orden de compra ------!
exports.index = function(req, res) {	
	PurchaseOrder.find({}, function(err, purchase_orders){
		if(err)
			res.status(500).send(err);
		res.status(200).send(purchase_orders);
	});
};

//----- Crear nueva orden de compra -------!
exports.create = (req, res) => {
	if(!req.body){
		return res.status(400).send({
			message: "purchase_order content can not be empty"
		});
	}

	const purchase_order = new PurchaseOrder(req.body);

	PurchaseOrder.countDocuments({}, function(err, count){
		purchase_order.number_order = count + 1;
	});

	purchase_order.save()
	.then(data => {
		productMovement.Movements(data.products, 'ENTRADA', data.number_order, data.purchase_date);	
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the purchase_order."
        });
	});
};

//----- Mostrar orden de compra -------!
exports.view = function(req, res){
	PurchaseOrder.findById(req.params._id)
	.populate('products.product', 'name')
	.exec(function (err, purchase_order){
		console.log(req.params._id);
		if(err)
			res.json(err);
		res.json(purchase_order);
	});
};

//--------- Actualizar orden de compra ----------!
exports.update = function(req, res){
	//console.log(req.params._id);
	PurchaseOrder.findByIdAndUpdate(req.params._id, req.body, {new: true}, function (err, purchase_order) {
		if	(err)	return res.status(500).send(err);
		res.status(200).send(purchase_order);
	})
};

//--------- Borrar orden de compra ----------!
exports.delete = function (req, res) {
    PurchaseOrder.deleteOne({
        _id: req.params._id
    }, function (err, purchase_order) {
        if (err)
            res.send(err);
    });
};