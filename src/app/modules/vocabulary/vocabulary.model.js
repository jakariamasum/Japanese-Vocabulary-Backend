const mongoose = require("mongoose");

const vocabularySchema = new mongoose.Schema(
  {
    word: { type: String, required: true, unique: true },
    pronunciation: { type: String, required: true },
    whenToSay: { type: String, required: true },
    lessonNo: { type: Number, required: true },
    adminEmail: { type: String, required: true },
  },
  { timestamps: true }
);

const Vocabulary = mongoose.model("vocabulary", vocabularySchema);

module.exports = Vocabulary;
