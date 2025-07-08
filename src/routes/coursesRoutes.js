const { Router } = require('express');
const router = Router();
const coursesController = require('../controllers/coursesController');

router.get('/', coursesController.getAll);
router.get('/:id', coursesController.getById);

module.exports = router;
