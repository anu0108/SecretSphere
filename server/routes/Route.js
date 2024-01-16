const { Register, Login, Logout } = require("../controllers/AuthController");
const {
  SecretMessage,
  CheckMessage,
  GetAllMessages,
} = require("../controllers/SecretController");

const router = require("express").Router();

router.post("/register", Register);
router.post("/login", Login);
router.post("/logout", Logout);

router.post("/secret", SecretMessage);
router.get("/check-message", CheckMessage);
router.get("/messages", GetAllMessages);

module.exports = router;
