const { Router } = require('express');
const router = Router();
const coursesController = require('../controllers/coursesController');

/**
 * @openapi
 * /add:
 *   post:
 *     summary: Added new course
 *     description: Creates a new course and returns its details
 *     tags: [courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - price
 *               - img
 *             properties:
 *               title:
 *                 type: string
 *                 default: "Node.js"
 *               price:
 *                 type: integer
 *                 default: 20000
 *               img:
 *                 type: string
 *                 default: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
 *     responses:
 *       '201':
 *         description: Course created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 newCourse:
 *                   type: object
 *                   required:
 *                     - id
 *                     - title
 *                     - price
 *                     - img
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "123"
 *                     title:
 *                       type: string
 *                       example: "name_course_1"
 *                     price:
 *                       type: number
 *                       example: 15000
 *                     img:
 *                       type: string
 *                       example: "link_picture_course1.svg"
 *       '400':
 *         $ref: '#/components/responses/BadRequest'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.post('/', coursesController.addNew);

module.exports = router;
