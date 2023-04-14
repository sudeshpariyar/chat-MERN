const express = require("express");

const router = express.Router();

router.get("/register", (req, res) => {
  const { name, password } = req.body;
  res.send(name, password);
});

module.exports = router;
