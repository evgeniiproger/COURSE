const { Router } = require('express');
const router = Router();
const coursesController = require('../controllers/coursesController');

router.post('/', coursesController.addNew);

module.exports = router;
