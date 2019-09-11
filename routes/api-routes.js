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

//Produccion
var brandController = require('../controllers/productions/brand');
var categoryController = require('../controllers/productions/category');
var productController = require('../controllers/productions/product');
var stockController = require('../controllers/productions/stock');

//Compras
var purchaseController = require('../controllers/purchases/purchase_order');
var providerController = require('../controllers/purchases/provider');

//Inventerio
var kardexController = require('../controllers/inventory/kardex');

var customerController = require('../controllers/sales/customer');
var storeController = require('../controllers/sales/store');
var staffController = require('../controllers/sales/staff');
var orderController = require('../controllers/sales/order');


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

router.route('/customers/:_id')
	.get(customerController.view)
	.patch(customerController.update)
	.put(customerController.update)
	.delete(customerController.delete);

//--------Routes Stores----------//
router.route('/stores')
	.get(storeController.index)
	.post(storeController.create);

router.route('/stores/:_id')
	.get(storeController.view)
	.patch(storeController.update)
	.put(storeController.update)
	.delete(storeController.delete);

//--------Routes Stores----------//
router.route('/staff')
	.get(staffController.index)
	.post(staffController.create);

router.route('/staff/:_id')
	.get(staffController.view)
	.patch(staffController.update)
	.put(staffController.update)
	.delete(staffController.delete);

//--------Routes Orders----------//
router.route('/orders')
	.get(orderController.index)
	.post(orderController.create);

router.route('/orders/:_id')
	.get(orderController.view)
	.patch(orderController.update)
	.put(orderController.update)
	.delete(orderController.delete);

//--------Routes Providers----------//
router.route('/providers')
	.get(providerController.index)
	.post(providerController.create);

router.route('/providers/:_id')
	.get(providerController.view)
	.patch(providerController.update)
	.put(providerController.update)
	.delete(providerController.delete);

//--------Routes Providers----------//
router.route('/kardex')		
	.get(kardexController.index)
	.post(kardexController.create);

//--------Routes Providers----------//
router.route('/purchases')
	.get(purchaseController.index)
	.post(purchaseController.create);

router.route('/purchases/:_id')
	.get(purchaseController.view)
	.patch(purchaseController.update)
	.put(purchaseController.update)

// Export API routes
module.exports = router;