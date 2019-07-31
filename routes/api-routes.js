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

router.route('/brands')
	.get(brandController.index)
	.post(brandController.new);

router.route('/brands/:_id')
	.get(brandController.view)
	.patch(brandController.update)
	.put(brandController.update)
	.delete(brandController.delete);


// Export API routes
module.exports = router;