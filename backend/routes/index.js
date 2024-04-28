const express = require("express");
const userSignUpController = require("../controller/userSignUp");
const userSignInController = require("../controller/userSignin");

const router = express.Router();

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);

module.exports = router;
