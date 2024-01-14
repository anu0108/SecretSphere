require("dotenv").config();
const UserModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.Register = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (user) {
    return res.json({ status: "fail", message: "User already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ email, password: hashedPassword });
  await newUser.save();

  const token = jwt.sign(
    {
      email: email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: 3 * 24 * 60 * 60,
    }
  );

  res.cookie("token", token, {
    maxAge: 1000 * 60 * 60 * 24 * 3,
    withCredentials: true,
    httpOnly: false,
    secure: true,
    sameSite: "none",
  });

  const foundUser = await UserModel.findOne({ email: email });
  res.cookie("userID", foundUser.id, {
    maxAge: 1000 * 60 * 60 * 24 * 3,
    withCredentials: true,
    httpOnly: false,
    secure: true,
    sameSite: "none",
  });

  res.json({ status: "ok", message: "User Registered Successfully!" });
};

module.exports.Login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: "All fields are required" });
  }

  const foundUser = await UserModel.findOne({ email: email });

  if (foundUser) {
    result = await bcrypt.compare(password, foundUser.password);
    if (result == true) {
      const token = jwt.sign(
        {
          email: foundUser.email,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: 3 * 24 * 60 * 60,
        }
      );
      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        withCredentials: true,
        httpOnly: false,
        secure: true,
        sameSite: "none",
      });
      res.cookie("userID", foundUser._id, {
        maxAge: 1000 * 60 * 60 * 24 * 3,
        withCredentials: true,
        httpOnly: false,
        secure: true,
        sameSite: "none",
      });

      return res.json({ status: "ok" });
    } else {
      return res.json({ status: "forgot", message: "Incorrect password" });
    }
  } else {
    return res.json({
      status: "false",
      message: "Kindly enter correct email.",
    });
  }
};
