const { Lesson } = require("../lesson/lesson.model.js");
const Vocabulary = require("./vocabulary.model");

const createVocabularyIntoDB = async (payload) => {
  const { lessonNo } = payload;

  const session = await Vocabulary.startSession();
  session.startTransaction();

  try {
    const vocabulary = await Vocabulary.create([payload], { session });

    const lesson = await Lesson.findOneAndUpdate(
      { lessonNumber: lessonNo },
      { $inc: { vocabularyCount: 1 } },
      { new: true, session }
    );

    if (!lesson) {
      throw new Error(`Lesson with lessonNo ${lessonNo} not found`);
    }

    await session.commitTransaction();
    session.endSession();

    return vocabulary;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

const getAllVocabulariesFromDB = async () => {
  const result = await Vocabulary.find();
  return result;
};
const getSingleVocabularyFromDB = async (id) => {
  const result = await Vocabulary.findOne({ _id: id });
  return result;
};
const getVocabulariesByLessonFromDB = async (id) => {
  const result = await Vocabulary.find({ lessonNo: id });
  return result;
};

const updateVocabularyIntoDB = async (id, payload) => {
  const result = await Vocabulary.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteVocabularyFromDB = async (id) => {
  const result = await Vocabulary.findOneAndDelete({ _id: id });
  return result;
};

module.exports = {
  createVocabularyIntoDB,
  getAllVocabulariesFromDB,
  getSingleVocabularyFromDB,
  updateVocabularyIntoDB,
  deleteVocabularyFromDB,
  getVocabulariesByLessonFromDB,
};
