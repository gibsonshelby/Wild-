const { Router } = require('express');

const router = Router();

// const authController = require('./controllers/authController');



/**
 * Returns home page
 * @route GET /
 */

router.get('/', (req, res, next) => {
    res.json('hello');
});



module.exports = router;