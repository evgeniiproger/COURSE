const CoursesDB = require('../models/courseModel');

async function getAllCourses() {
  const allCourses = await CoursesDB.getAll();
  return allCourses;
}

async function getCourse(id) {
  const course = await CoursesDB.getId(id);

  if (!course) {
    const err = new Error(`Course with id ${id} not found`);
    err.status = 404;
    throw err;
  }

  return course;
}

async function addCourse(data) {
  const newCourse = await CoursesDB.addCourse(data);
  return newCourse;
}

async function editCourse({ id, title, price, img, userId }) {
  const course = await CoursesDB.getId(id);

  if (!course) {
    const err = new Error(`Course with id ${id} not found`);
    err.status = 404;
    throw err;
  }

  const newCourse = CoursesDB.editCourse({
    id,
    title,
    price,
    img,
    userId,
  });
  return newCourse;
}

module.exports = {
  getAllCourses,
  getCourse,
  addCourse,
  editCourse,
};
