const express = require("express");
const { check } = require("express-validator");
const rateLimiting = require("../middleware/rateLimiting");
const csrfProtection = require("../middleware/csrfProtection");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/login", rateLimiting, authController.login);
router.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  rateLimiting,
  authController.registerUser
);

module.exports = router;
