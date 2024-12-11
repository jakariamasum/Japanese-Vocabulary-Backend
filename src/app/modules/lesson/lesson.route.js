const express = require("express");
const {
  getAllLessons,
  getSingleLesson,
  createLessons,
  updateLesson,
  deleteLesson,
} = require("./lesson.controller");
const router = express.Router();

router.post("/", createLessons);
router.get("/", getAllLessons);
router.get("/:id", getSingleLesson);
router.put("/:id", updateLesson);
router.delete("/:id", deleteLesson);

module.exports = { LessonRoutes: router };
