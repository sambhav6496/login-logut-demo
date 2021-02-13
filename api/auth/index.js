const router = require("express").Router();
const AuthRouter = require("./router");

router.post("/register", AuthRouter.register);
router.post("/login", AuthRouter.login);

module.exports = router;
