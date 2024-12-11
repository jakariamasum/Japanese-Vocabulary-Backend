const express = require("express");
const {
  createVocabulary,
  getAllVocabularies,
  getSingleVocabulary,
  updateVocabulary,
  deleteVocabulary,
  getVocabulariesByLesson,
} = require("./vocabulary.controller");

const router = express.Router();

router.post("/", createVocabulary);
router.get("/", getAllVocabularies);
router.get("/:id", getSingleVocabulary);
router.get("/lesson/:lessonNo", getVocabulariesByLesson);
router.put("/:id", updateVocabulary);
router.delete("/:id", deleteVocabulary);

module.exports = { VocabularyRoutes: router };
