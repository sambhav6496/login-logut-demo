const router = require('express').Router();
const AuthRouter = require('./router');

router.get('/login', AuthRouter.getUserById)
router.put('/login', AuthRouter.updateUser)
router.delete('/login', AuthRouter.deleteUser)

module.exports = router