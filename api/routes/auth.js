const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.post("/register", async (req, res) => {
  debugger;
  const { name, password } = req.body;
  try {
    const createdUser = await User.create({ name, password });
    jwt.sign(
      { userId: createdUser._id },
      process.env.JWT_SECRET_KEY,
      {},
      (err, token) => {
        if (err) throw err;
        res
          .cookie("token", token)
          .status(201)
          .json({ id: createdUser._id, name: createdUser.name });
      }
    );
  } catch (error) {
    throw error;
  }
});

module.exports = router;
