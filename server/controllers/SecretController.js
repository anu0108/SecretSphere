const SecretModel = require("../models/Secret");

module.exports.SecretMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    console.log(req.cookies.userID);
    const userID = req.cookies.userID;
    if (!userID) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Check if the user has already posted a message with the same content
    // const existingSecret = await SecretModel.findOne({ user: userID, message });

    // if (existingSecret) {
    //   // User has already posted a message with the same content
    //   return res
    //     .status(400)
    //     .json({ error: "You have already posted the message" });
    // }

    const newSecret = new SecretModel({ message, user: userID });
    await newSecret.save();

    res.status(201).json({
      message: "Secret saved successfully",
      timestamp: newSecret.timestamp,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.CheckMessage = async (req, res) => {
  try {
    const userID = req.cookies.userID;

    if (!userID) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Check if the user has already posted a message
    const existingMessage = await SecretModel.findOne({ user: userID });

    if (existingMessage) {
      return res
        .status(200)
        .json({ message: "User has already posted a message" });
    }

    res.status(200).json({ message: "User has not posted a message yet" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.GetAllMessages = async (req, res) => {
  try {
    const messages = await SecretModel.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
