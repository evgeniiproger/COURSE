const { Router } = require('express');
const router = Router();
const CoursesDB = require('../models/courseModel');

router.get('/', (req, res) => {
  try {
    const courses = CoursesDB.getAll();
    res.status(201).json(courses);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/:id', (req, res) => {
  try {
    const courses = CoursesDB.getId(req.params.id);
    res.status(201).json(courses);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
