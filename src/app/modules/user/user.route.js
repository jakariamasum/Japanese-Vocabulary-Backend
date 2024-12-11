const express = require("express");
const {
  getAllUsers,
  getSingleUser,
  updateUserRole,
} = require("./user.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.put("/:id/role", updateUserRole);

module.exports = { UserRoutes: router };
