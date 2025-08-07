//Контроллер — отвечает за доступ, безопасность, обработку запроса.
const coursesService = require('../services/coursesService');

function isOwner(course, req) {
  return course.user_id.toString() === req.toString();
}

async function getAll(req, res, next) {
  try {
    const allCourses = await coursesService.getAllCourses();
    res.status(200).json({ allCourses });
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const course = await coursesService.getCourse(req.params.id);
    res.status(200).json({ course });
  } catch (err) {
    next(err);
  }
}

async function addNew(req, res, next) {
  try {
    const course = req.body;
    const userId = 333; //после JWT - req.user.id;
    const newCourseData = {
      userId,
      ...course,
    };
    const newCourse = await coursesService.addCourse(newCourseData);
    res.status(201).json({ newCourse });
  } catch (err) {
    next(err);
  }
}

async function edit(req, res, next) {
  try {
    const id = req.params.id;
    const course = req.body;
    const userId = 333; //после JWT - req.user.id;
    if (!isOwner(course, userId)) {
      return res.status(403).json({
        error: 'Доступ запрещён: вы не являетесь владельцем курса',
      });
    }

    const editCourseData = {
      userId,
      id,
      ...course,
    };

    const updatedCourse = await coursesService.editCourse(editCourseData);

    res.status(200).json({ updatedCourse });
  } catch (err) {
    next(err);
  }
}

async function deleteById(req, res, next) {
  try {
    const courseId = req.params.id;
    const course = await coursesService.getCourse(courseId);
    const userId = 333; //после JWT - req.user.id;

    if (!isOwner(course, userId)) {
      res.status(403).json({
        error: 'Доступ запрещён: вы не являетесь владельцем курса',
      });
    }

    const deletedCourse = await coursesService.deleteCourse(courseId);

    res.status(204).json({ deletedCourse });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAll,
  getById,
  addNew,
  edit,
  deleteById,
};
