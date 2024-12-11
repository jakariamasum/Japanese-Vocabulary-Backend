const express = require("express");
const { registerUser, loginUser, monitorUser } = require("./auth.controller");
const { authMiddleware } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware, monitorUser);

module.exports = { AuthRoutes: router };
