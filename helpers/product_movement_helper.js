const mongoose = require('mongoose');
const Kardex = require('../models/inventory/kardex');

const Movements = (product, movement_type, reference) => {
	if(movement_type === 'ENTRADA'){
		product.forEach(element => {		
				let kardex_movement = {
					'product': element.product_id,
					'quantity': element.quantity,
					'unit_cost': element.unit_cost,
					'description': reference,
					'movement_type': movement_type,
				}

				kardex.create(kardex_movement, function(error, res){
					if(error)
						console.log('Error de Registro', '');
					//res.send(res);
				})		
		});
	}
	if(movement_type === 'SALIDA'){
		product.forEach(element => {		
				let kardex_movement = {
					'product': element.product_id,
					'quantity': element.quantity,
					'unit_cost': element.unit_cost,
					'description': reference,
					'movement_type': movement_type,
				}

				kardex.create(kardex_movement, function(error, res){
					if(error)
						console.log('Error de Registro', '');
					//res.send(res);
				})		
		});
	}
	if(movement_type === 'AJUSTE'){	
		let kardex_movement = {
			'product': element.product_id,
			'quantity': element.quantity,
			'unit_cost': element.unit_cost,
			'description': reference,
			'movement_type': movement_type,
		}
		kardex.create(kardex_movement, function(error, res){
			if(error)
				console.log('Error de Registro', '');
			//res.send(res);
		})		
	}
}

module.exports = {
	Movements
}