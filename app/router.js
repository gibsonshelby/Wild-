const { Router } = require('express');

const userController = require ('./controller/UserController');
const router = Router();





/**
 * Returns home page
 * @route GET /
 */

// router.get('/', (req, res, next) => {
//     res.json('hello');
// });

router.get('/users',userController.getAll)
router.post('/user',userController.add);

module.exports = router;