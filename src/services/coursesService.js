const CoursesDB = require('../models/courseModel');

function getAllCourses() {
  const allCourses = CoursesDB.getAll();
  return allCourses;
}

function getCourse(id) {
  const course = CoursesDB.getId(id);

  if (!course) {
    const err = new Error(`Course with id ${id} not found`);
    err.status = 404;
    throw err;
  }

  return course;
}

function addCourse({ title, price, img }) {
  const newCourse = CoursesDB.addCourse({ title, price, img });
  return newCourse;
}

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
};
