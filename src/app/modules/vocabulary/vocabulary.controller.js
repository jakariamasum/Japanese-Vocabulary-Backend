const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const {
  createVocabularyIntoDB,
  getAllVocabulariesFromDB,
  getSingleVocabularyFromDB,
  updateVocabularyIntoDB,
  deleteVocabularyFromDB,
  getVocabulariesByLessonFromDB,
} = require("./vocabulary.service");

const createVocabulary = catchAsync(async (req, res) => {
  const result = await createVocabularyIntoDB(req.body);
  if (!result) {
    throw new AppError(404, "Something went wrong");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vocabulary created successfully!",
    data: result,
  });
});

const getAllVocabularies = catchAsync(async (req, res) => {
  const result = await getAllVocabulariesFromDB();
  if (!result) {
    throw new AppError(404, "No Vocabularys found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vocabularies retrived successfully!",
    data: result,
  });
});

const getSingleVocabulary = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleVocabularyFromDB(id);
  if (!result) {
    throw new AppError(404, "No Vocabularys found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vocabulary retrived successfully!",
    data: result,
  });
});
const getVocabulariesByLesson = catchAsync(async (req, res) => {
  const { lessonNo } = req.params;
  console.log("lesson: ", lessonNo);
  const result = await getVocabulariesByLessonFromDB(lessonNo);
  if (!result) {
    throw new AppError(404, "No Vocabularys found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vocabulary retrived successfully!",
    data: result,
  });
});
const updateVocabulary = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateVocabularyIntoDB(id, req.body);
  if (!result) {
    throw new AppError(404, "No Vocabularys found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vocabulary updated successfully!",
    data: result,
  });
});
const deleteVocabulary = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteVocabularyFromDB(id);
  if (!result) {
    throw new AppError(404, "No Vocabularys found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Vocabulary deleted successfully!",
    data: result,
  });
});

module.exports = {
  createVocabulary,
  getAllVocabularies,
  getSingleVocabulary,
  getVocabulariesByLesson,
  updateVocabulary,
  deleteVocabulary,
};
