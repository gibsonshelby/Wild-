const { Router } = require('express');

const authController = require ('./controller/UserController');
const router = Router();

// const authController = require('./controllers/authController');



/**
 * Returns home page
 * @route GET /
 */

router.get('/', (req, res, next) => {
    res.json('hello');
});

router.get('/user',authController.add)
router.post('/user',authController.add);

module.exports = router;