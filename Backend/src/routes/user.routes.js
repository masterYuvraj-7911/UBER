const express = require("express");
const router = express.Router();

const { body } = require("express-validator");
const { registerUser } = require("../controllers/user.controller");

router.post("/register",[
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({ min : 8 }).withMessage("Invalid password"),
    body("fullName.firstName").isLength({ min : 3, max : 12 }).withMessage("Firstname should be minimum 3 character namr maximum 12."),
], registerUser);




module.exports = router;