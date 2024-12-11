const mongoose = require("mongoose");
const lessonSchema = new mongoose.Schema({
  lessonName: { type: String, require: true },
  lessonNumber: { type: String, require: true },
  vocabularyCount: { type: Number, default: 0 },
});

module.exports = { Lesson: mongoose.model("lesson", lessonSchema) };
