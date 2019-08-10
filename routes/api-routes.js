"use strict"
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API OK',
        message: 'RestFull'
    });
});

var brandController = require('../controllers/productions/brand');
var categoryController = require('../controllers/productions/category');
var stockController = require('../controllers/productions/stock');
var productController = require('../controllers/productions/product');
var customerController = require('../controllers/sales/customer');

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

//--------Routes Products----------//
router.route('/products')
	.get(productController.index)
	.post(productController.create);

router.route('/products/:_id')
	.get(productController.view)
	.patch(productController.update)
	.put(productController.update)
	.delete(productController.delete);

//--------Routes Customers----------//
router.route('/customers')
	.get(customerController.index)
	.post(customerController.create);

/*router.route('/customers/:_id')
	.get(productController.view)
	.patch(productController.update)
	.put(productController.update)
	.delete(productController.delete);*/


// Export API routes
module.exports = router;