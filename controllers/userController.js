// controllers/userController.js
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { username, email, password, walletAddress } = req.body;
    const newUser = new User({ username, email, password, walletAddress });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
