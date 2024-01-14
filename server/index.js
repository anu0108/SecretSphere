const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/Route");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", authRoute);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ihhdl2r.mongodb.net/secretsphere`
);

app.listen(3001, () => {
  console.log("Server started on PORT 3001");
});
