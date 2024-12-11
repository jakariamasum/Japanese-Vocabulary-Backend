const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  updateUserRole,
} = require("./user.controller");
const {
  authMiddleware,
  isAdminMiddleware,
} = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get("/:id", authMiddleware, getSingleUser);

// admin routes
router.get("/", authMiddleware, isAdminMiddleware, getAllUsers);
router.put("/:id/role", authMiddleware, isAdminMiddleware, updateUserRole);

module.exports = { UserRoutes: router };
