const catchAsync = require("../../utils/catchAsync");
const sendResponse = require("../../utils/sendResponse");
const {
  createLessonIntoDB,
  getSingleLessonFromDB,
  getAllLessonsFromDB,
  updateLessonIntoDB,
  deleteLessonFromDB,
} = require("./lesson.service");
const createLessons = catchAsync(async (req, res) => {
  const result = await createLessonIntoDB(req.body);
  if (!result) {
    throw new AppError(404, "Something went wrong");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Lessons created successfully!",
    data: result,
  });
});

const getAllLessons = catchAsync(async (req, res) => {
  const result = await getAllLessonsFromDB();
  if (!result) {
    throw new AppError(404, "No lessons found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Lessons retrived successfully!",
    data: result,
  });
});

const getSingleLesson = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await getSingleLessonFromDB(id);
  if (!result) {
    throw new AppError(404, "No lessons found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Lesson retrived successfully!",
    data: result,
  });
});
const updateLesson = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await updateLessonIntoDB(id, req.body);
  if (!result) {
    throw new AppError(404, "No lessons found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Lesson updated successfully!",
    data: result,
  });
});
const deleteLesson = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await deleteLessonFromDB(id);
  if (!result) {
    throw new AppError(404, "No lessons found");
  }
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Lesson deleted successfully!",
    data: result,
  });
});

module.exports = {
  createLessons,
  getAllLessons,
  getSingleLesson,
  updateLesson,
  deleteLesson,
};
