const router = require("express").Router();
const User = require("../../models/UsersSchema");
const UserRouter = require("./route");

// router.delete('/user/:id')
router.put("/:Id", UserRouter.updateUser);
router.delete("/:Id", UserRouter.deleteUser);

module.exports = router;
