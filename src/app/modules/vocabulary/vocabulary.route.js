const express = require("express");
const {
  createVocabulary,
  getAllVocabularies,
  getSingleVocabulary,
  updateVocabulary,
  deleteVocabulary,
  getVocabulariesByLesson,
} = require("./vocabulary.controller");
const {
  authMiddleware,
  isAdminMiddleware,
} = require("../../middlewares/authMiddleware");

const router = express.Router();

router.get("/:id", authMiddleware, getSingleVocabulary);
router.get("/lesson/:lessonNo", authMiddleware, getVocabulariesByLesson);

// admin routes
router.post("/", authMiddleware, isAdminMiddleware, createVocabulary);
router.get("/", authMiddleware, isAdminMiddleware, getAllVocabularies);
router.put("/:id", authMiddleware, isAdminMiddleware, updateVocabulary);
router.delete("/:id", authMiddleware, isAdminMiddleware, deleteVocabulary);

module.exports = { VocabularyRoutes: router };
