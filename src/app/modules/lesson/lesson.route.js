const express = require("express");
const {
  getAllLessons,
  getSingleLesson,
  createLessons,
  updateLesson,
  deleteLesson,
} = require("./lesson.controller");
const {
  authMiddleware,
  isAdminMiddleware,
} = require("../../middlewares/authMiddleware");
const router = express.Router();

router.get("/", authMiddleware, getAllLessons);

// admin routes
router.post("/", authMiddleware, isAdminMiddleware, createLessons);
router.get("/:id", authMiddleware, isAdminMiddleware, getSingleLesson);
router.put("/:id", authMiddleware, isAdminMiddleware, updateLesson);
router.delete("/:id", authMiddleware, isAdminMiddleware, deleteLesson);

module.exports = { LessonRoutes: router };
