Kardex = require('../../models/inventory/kardex.js');

//---- Mostrar todos los movimientos de productos ------! 
exports.index = function(req, res) {
	Kardex.find({}, function(err, kardexs){
		if(err)
			res.status(500).send(err);
		res.status(200).send(kardexs);
	});
};

//-------- Crear nuevo movimiento --------!
exports.create = (req, res) => {
	if(!req.body){
		return res.status(400).send({
			message: "Kardex content can not beempty"
		});
	}

	const kardex = new Kardex(req.body);

	kardex.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the kardex."
        });
	});
};

//--------- Mostrar movimiento ----------!
exports.view = function(req, res){
	Kardex.findById(req.params._id, function (err, kardex){
		if(err)
			res.json(err);
		res.json(kardex);
	});
};

//--------- Actualizar movimiento ----------!
/*exports.update = function(req, res){
	Kardex.findByIdAndUpdate(req.params._id, req.body, {new: true}, function (err, kardex) {
		if	(err)	return res.status(500).send(err);
		res.status(200).send(kardex);
	})
};*/

//--------- Borrar movimiento ----------!
/*exports.delete = function (req, res) {
    Kardex.deleteOne({
        _id: req.params._id
    }, function (err, kardex) {
        if (err)
						res.send(err);
				res.json({
					Status: 'Kardex Delete'
				})
    });
};*/