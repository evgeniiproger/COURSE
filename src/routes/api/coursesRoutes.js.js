const { Router } = require('express');
const router = Router();
const coursesController = require('../../controllers/coursesController');
/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     description: Returns a single course by its unique identifier.
 *     tags: [courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     responses:
 *       '200':
 *         description: Returns a single course object matching the provided ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 course:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "123"
 *                     title:
 *                       type: string
 *                       example: "name_course_1"
 *                     price:
 *                       type: integer
 *                       example: 100
 *                     img:
 *                       type: string
 *                       format: uri
 *                       example: "link_picture_course1.svg"
 *       '404':
 *         description: Course not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Course with {id} not found"
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get('/:id', coursesController.getById);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     description: Returns an array of all available courses
 *     tags: [courses]
 *     responses:
 *       200:
 *         description: A list of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 allCourses:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "123"
 *                       title:
 *                         type: string
 *                         example: "name_course_1"
 *                       price:
 *                         type: integer
 *                         example: 100
 *                       img:
 *                         type: string
 *                         format: uri
 *                         example: "link_picture_course1.svg"
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.get('/', coursesController.getAll);

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
 *                     - user_id
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
 *                     user_id:
 *                       type: string
 *                       example: "123123"
 *
 *       '400':
 *         $ref: '#/components/responses/BadRequest'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.post('/', coursesController.addNew);

router.put('/:id', coursesController.edit);

router.delete('/:id', coursesController.deleteById);

module.exports = router;
