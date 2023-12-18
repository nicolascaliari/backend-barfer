const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateCreateUser } = require('../validators/user');
const { checkAuth } = require('../middlewares/auth');
const { checkRoleAuth } = require('../middlewares/roleAuth');

const route = express.Router();

/**
 * @openapi
 * tags:
 *   - name: users
 *     description: endpoints users
 */

/**
 * @openapi
 * paths:
 *   /user/users:
 *     get:
 *       summary: Get all users
 *       tags: [users]
 *       security:
 *         - BearerAuth: []
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/users'
 *         '403':
 *           description: Forbidden - Invalid token
 */
route.get('/users', checkAuth, checkRoleAuth(['admin']), userController.getUser);

/**
 * @openapi
 * paths:
 *   /user/create:
 *     post:
 *       summary: Create a new user
 *       tags: [users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/users'
 *       responses:
 *         '200':
 *           description: User created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/users'
 *         '500':
 *           description: Internal Server Error
 */
route.post('/create', validateCreateUser, userController.createUser);

module.exports = route;
