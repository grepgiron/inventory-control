"use strict"
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

var brandController = require('../controllers/brand');
var categoryController = require('../controllers/category');
var stockController = require('../controllers/stock');

//--------Routes Brands----------//
router.route('/brands')
	.get(brandController.index)
	.post(brandController.create);

router.route('/brands/:_id')
	.get(brandController.view)
	.patch(brandController.update)
	.put(brandController.update)
	.delete(brandController.delete);

//--------Routes Categories----------//
router.route('/categories')
	.get(categoryController.index)
	.post(categoryController.create);

router.route('/categories/:_id')
	.get(categoryController.view)
	.patch(categoryController.update)
	.put(categoryController.update)
	.delete(categoryController.delete);

//--------Routes Stocks----------//
router.route('/stocks')
	.get(stockController.index)
	.post(stockController.create);

router.route('/stocks/:_id')
	.get(stockController.view)
	.patch(stockController.update)
	.put(stockController.update)
	.delete(stockController.delete);


// Export API routes
module.exports = router;