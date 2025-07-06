const { Router } = require('express');
const router = Router();
const CoursesDB = require('../models/courseModel');

router.post('/', (req, res) => {
  try {
    const { title, price, img } = req.body;
    const course = CoursesDB.addCourse({ title, price, img });
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
