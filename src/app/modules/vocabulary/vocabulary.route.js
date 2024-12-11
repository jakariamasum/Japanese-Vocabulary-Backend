const express = require("express");
const {
  createVocabulary,
  getAllVocabularies,
  getSingleVocabulary,
  updateVocabulary,
  deleteVocabulary,
} = require("./vocabulary.controller");

const router = express.Router();

router.post("/", createVocabulary);
router.get("/", getAllVocabularies);
router.get("/:id", getSingleVocabulary);
router.put("/:id", updateVocabulary);
router.delete("/:id", deleteVocabulary);

module.exports = { VocabularyRoutes: router };
