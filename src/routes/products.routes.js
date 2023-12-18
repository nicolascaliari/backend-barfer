const express = require('express');
const controllerProducts = require('../controllers/products.controller');
const { validateCreateProduct } = require('../validators/product')

const route = express.Router();


/**
 * @openapi
 * tags:
 *   - name: products
 *     description: endpoints products
 */


/**
 * @openapi
 * paths:
 *   /product/products:
 *     get:
 *       summary: Get all products
 *       tags: [products]
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
 *                   $ref: '#/components/schemas/products'
 *         '403':
 *           description: Forbidden - Invalid token
 */
route.get('/products', controllerProducts.getProducts);




/**
 * Post track
 * @openapi
 * /:idproducto:
 *    delete:
 *      tags:
 *        - products
 *      summary: "delete products"
 *      description: Este endpoint es para eliminar un producto
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/products"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la colección.
 *        '422':
 *          description: Error de validación.
 *      security:
 *       - ffofofof: []
 */
route.delete('/:idproducto', controllerProducts.deleteProduct);



/**
 * Post track
 * @openapi
 * /:idproducto:
 *    put:
 *      tags:
 *        - products
 *      summary: "update products"
 *      description: Este endpoint es para actualizar un producto
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/products"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la colección.
 *        '422':
 *          description: Error de validación.
 *      security:
 *       - ffofofof: []
 */
route.put('/:idproducto', controllerProducts.updateProduct);



/**
 * Post track
 * @openapi
 * /create:
 *    post:
 *      tags:
 *        - products
 *      summary: "create products"
 *      description: Este endpoint es para crear un producto
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/products"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la colección.
 *        '422':
 *          description: Error de validación.
 *      security:
 *       - ffofofof: []
 */
route.post('/create', validateCreateProduct, controllerProducts.createProduct);

module.exports = route;
