const userModel = require("../models/user.model");
const { validationResult } = require("express-validator");
const { createUser } = require("../services/user.service");
const { success, error } = require("../utils/response");

const registerUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return error(res, 400, "Validation failed", { errors: errors.array() });
    

    const { fullName: { firstName, lastName }, email, password} = req.body;

    const hashPassword = await userModel.hashPassword(password);

    const user = await createUser({ firstName, lastName, email, password: hashPassword,});

    const token = user.generateAuthToken();

    return success(res, 201, "User created successfully", { user, token });
  } catch (err) {
    
    console.error(err);

    if (err.code === 11000) return error(res, 409, "Email already exists");
    
    return error(res, 500, "Internal server error");
  }
};

module.exports = { registerUser };
