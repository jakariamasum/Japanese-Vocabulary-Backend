const Vocabulary = require("./vocabulary.model");

const createVocabularyIntoDB = async (payload) => {
  const result = await Vocabulary.create(payload);
  return result;
};

const getAllVocabulariesFromDB = async () => {
  const result = await Vocabulary.find();
  return result;
};
const getSingleVocabularyFromDB = async (id) => {
  const result = await Vocabulary.findOne({ _id: id });
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
};
