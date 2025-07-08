const coursesService = require('../services/coursesService');

function getAll(req, res, next) {
  try {
    const allCourses = coursesService.getAllCourses();
    res.status(200).json({ allCourses });
  } catch (err) {
    next(err);
  }
}

function getById(req, res, next) {
  try {
    const course = coursesService.getCourse(req.params.id);
    res.status(200).json({ course });
  } catch (err) {
    next(err);
  }
}

function addNew(req, res, next) {
  try {
    const newCourse = coursesService.addCourse(req.body);
    res.status(201).json({ newCourse });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAll,
  getById,
  addNew,
};
