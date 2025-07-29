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
    const courseData = req.body;
    const userId = 333; //после JWT - req.user.id;
    const newCourseData = {
      userId,
      ...courseData,
    };
    const newCourse = await coursesService.addCourse(newCourseData);
    res.status(201).json({ newCourse });
  } catch (err) {
    next(err);
  }
}

async function edit(req, res, next) {
  try {
    const courseData = req.body;
    const userId = 333; //после JWT - req.user.id;
    if (!isOwner(courseData, userId)) {
      return res.status(403).json({
        error: 'Доступ запрещён: вы не являетесь владельцем курса',
      });
    }

    const editCourseData = {
      userId,
      ...courseData,
    };

    const updatedCourse = await coursesService.editCourse(editCourseData);

    res.status(201).json({ updatedCourse });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAll,
  getById,
  addNew,
  edit,
};
