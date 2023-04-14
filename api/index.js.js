const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT;

const authRoutes = require("./routes/auth");

app.get("/", (req, res) => {
  res.send("this is test");
});

app.use("/auth", authRoutes);

mongoose.connect(process.env.CONNECTION_URL).then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
  });
});
