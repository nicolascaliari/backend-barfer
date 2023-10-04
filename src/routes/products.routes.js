const express = require('express');
const controllerProducts = require('../controllers/products.controller');

/**
 * Rutas relacionadas con los productos.
 * @module routes/products
 */

const route = express.Router();

/**
 * Obtiene todos los productos.
 * @name GET /products/
 * @function
 * @memberof module:routes/products
 * @returns {Array} - Una lista de productos.
 * @throws {Error} - Si hay un error al obtener los productos.
 */
route.get('/', controllerProducts.getProducts);

/**
 * Elimina un producto por su ID.
 * @name DELETE /products/:idproducto
 * @function
 * @memberof module:routes/products
 * @param {number} idproducto - El ID del producto a eliminar.
 * @returns {string} - Un mensaje de éxito.
 * @throws {Error} - Si hay un error al eliminar el producto.
 */
route.delete('/:idproducto', controllerProducts.deleteProduct);

/**
 * Actualiza un producto por su ID.
 * @name PUT /products/:idproducto
 * @function
 * @memberof module:routes/products
 * @param {number} idproducto - El ID del producto a actualizar.
 * @param {Object} body - Datos actualizados del producto.
 * @returns {Object} - El producto actualizado.
 * @throws {Error} - Si hay un error al actualizar el producto.
 */
route.put('/:idproducto', controllerProducts.updateProduct);

/**
 * Crea un nuevo producto.
 * @name POST /products/
 * @function
 * @memberof module:routes/products
 * @param {Object} body - Datos del nuevo producto.
 * @returns {Object} - El producto creado.
 * @throws {Error} - Si hay un error al crear el producto.
 */
route.post('/', controllerProducts.createProduct);

module.exports = route;
