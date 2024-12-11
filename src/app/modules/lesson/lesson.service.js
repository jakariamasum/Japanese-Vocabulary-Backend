const { Lesson } = require("./lesson.model");

const createLessonIntoDB = async (payload) => {
  const result = await Lesson.create(payload);
  return result;
};

const getAllLessonsFromDB = async () => {
  const result = await Lesson.find();
  return result;
};
const getSingleLessonFromDB = async (id) => {
  const result = await Lesson.findOne({ _id: id });
  return result;
};

const updateLessonIntoDB = async (id, payload) => {
  const result = await Lesson.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteLessonFromDB = async (id) => {
  const result = await Lesson.findOneAndDelete({ _id: id });
  return result;
};

module.exports = {
  createLessonIntoDB,
  getAllLessonsFromDB,
  getSingleLessonFromDB,
  updateLessonIntoDB,
  deleteLessonFromDB,
};
