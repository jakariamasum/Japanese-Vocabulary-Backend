const express = require("express");
const { getAllUsers, getSingleUser } = require("./user.controller");
const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);

module.exports = { UserRoutes: router };
