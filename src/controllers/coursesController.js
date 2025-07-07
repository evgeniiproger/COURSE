const coursesService = require('../services/coursesService');

function getAll(req, res) {
  try {
    const allCourses = coursesService.getAllCourses();
    res.status(200).json({ allCourses });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

function getById(req, res) {
  try {
    const { id } = req.params;
    const course = coursesService.getCourse(id);

    if (!course) {
      return res
        .status(404)
        .json({ message: `Course with id ${id} not found` });
    }

    res.status(200).json({ course });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

function addNew(req, res) {
  try {
    const newCourse = coursesService.addCourse(req.body);
    res.status(201).json({ newCourse });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

module.exports = {
  getAll,
  getById,
  addNew,
};
