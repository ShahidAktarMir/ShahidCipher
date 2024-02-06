const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const authService = require("../services/authService");
const { validationResult } = require("express-validator");

const registerUser = async (req, res) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { username, email, password, name } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({ error: [{ msg: "User already exists" }] });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();
    console.log(newUser);

    const payload = {
      user: {
        id: newUser._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    if (user.loginAttempts >= 5 && user.lockUntil > Date.now()) {
      return res
        .status(429)
        .json({ errors: [{ msg: "Account locked, please try again later" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);
    if (!isMatch) {
      user.loginAttempts += 1;
      await user.save();
      return res.status(400).json({ errors: [{ msg: "Invalid credentials" }] });
    }

    user.loginAttempts = 0;
    await user.save();

    const payload = {
      user: {
        id: user._id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = { login, registerUser };
