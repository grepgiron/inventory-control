Staff = require('../../models/sales/staff.js');

//---- Mostrar todo el personal------!
exports.index = function(req, res) {
	Staff.find()
	.populate('store', 'name city street')
	.exec(function(err, staff){
		if(err)
			console.log(err);
		res.json(staff);
	});
};

//----- Crear nuevo personal -------!
exports.create = (req, res) => {
	console.log(req.body);
	if(!req.body){
		return res.status(400).send({
			message: "Staff content can not be empty"
		});
	}

	const staff = new Staff(req.body);

	staff.save()
	.then(data => {
		res.send(data);
	}).catch(err => {
		res.status(500).send({
            message: err.message || "Something wrong while creating the staff."
        });
	});
};

//----- Mostrar personal -------!
exports.view = function(req, res){
	Staff.findById(req.params._id, function (err, staff){
		console.log(req.params._id);
		if(err)
			res.json(err);
		res.json(staff);
	});
};

//--------- Actualizar personal ----------!
exports.update = function(req, res){
	//console.log(req.params._id);
	Staff.findById(req.params._id, function(err, staff){
		if(err)
			res.json(err);
		staff.name =req.body.name ? req.body.name : staff.name;
		staff.save(function(err){
			if(err)
				res.json(err);
			res.json({
				message: "Staff info update",
				staff: staff
			});
		});
	});
};

//--------- Borrar personal ----------!
exports.delete = function (req, res) {
    Staff.remove({
        _id: req.params._id
    }, function (err, staff) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Staff deleted'
        });
    });
};