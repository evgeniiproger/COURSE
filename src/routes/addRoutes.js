const { Router } = require('express');
const router = Router();
const coursesController = require('../controllers/coursesController');

router.post('/', coursesController.addNew);

// router.post('/', (req, res) => {
//   try {
//     const { title, price, img } = req.body;
//     const course = CoursesDB.addCourse({ title, price, img });
//     res.status(201).json(course);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

module.exports = router;
