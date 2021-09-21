const express = require("express");
const userController = require("../controllers/users");

const router = express.Router();

router.get("/getuser", userController.getUser);
router.get("/deleteuser", userController.deleteUser);
router.get("/updateuser", userController.updateUser);
router.get("/createuser", userController.createUser);

module.exports = router;