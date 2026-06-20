const userModel = require("../models/user.model");

const createUser = async ({ firstName, lastName, email, password }) => {
  try {
    if (!firstName || !email || !password) throw new Error("All fields are required");
    

    const user = await userModel.create({ fullName: { firstName, lastName }, email, password,});

    return user;
  } catch (err) {
    throw err; // controller will handle it
  }
};

module.exports = { createUser };

module.exports = { createUser };
