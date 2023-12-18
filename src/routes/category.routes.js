const express = require('express');
const { createCategory, getCategory, updateCategory, deleteCategory } = require('../controllers/category.controller');
const { validateCreateCategory } = require('../validators/category');
const { checkAuth } = require('../middlewares/auth');
const { checkRoleAuth } = require('../middlewares/roleAuth');

const route = express.Router();


/**
 * @openapi
 * tags:
 *   - name: categories
 *     description: endpoints categories
 */


/**
 * @openapi
 * paths:
 *   /category/categories:
 *     get:
 *       summary: Get all categories
 *       tags: [categories]
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
 *                   $ref: '#/components/schemas/categories'
 *         '403':
 *           description: Forbidden - Invalid token
 */
route.get('/categories', checkAuth, checkRoleAuth(["admin"]), getCategory);


/**
 * @openapi
 * paths:
 *   /category/create:
 *     post:
 *       summary: Create categories
 *       tags: [categories]
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
 *                   $ref: '#/components/schemas/categories'
 *         '403':
 *           description: Forbidden - Invalid token
 */
route.post('/create', checkAuth, checkRoleAuth(["admin"]), validateCreateCategory, createCategory);



/**
 * @openapi
 * paths:
 *   /category/update:
 *     put:
 *       summary: Update categories
 *       tags: [categories]
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
 *                   $ref: '#/components/schemas/categories'
 *         '403':
 *           description: Forbidden - Invalid token
 */
route.put('/update', checkAuth, checkRoleAuth(["admin"]), updateCategory);



/**
 * @openapi
 * paths:
 *   /category/delete:
 *     delete:
 *       summary: Delete categories
 *       tags: [categories]
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
 *                   $ref: '#/components/schemas/categories'
 *         '403':
 *           description: Forbidden - Invalid token
 */
route.delete('/delete', checkAuth, checkRoleAuth(["admin"]), deleteCategory);


module.exports = route;