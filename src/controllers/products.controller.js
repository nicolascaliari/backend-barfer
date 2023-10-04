/**
 * Controlador de productos.
 * @module controllers/products.controller
 */

const createConnection = require('../db');

const productsController = {
    /**
     * Obtiene todos los productos.
     * @function
     * @memberof module:controllers/products.controller
     * @async
     * @param {Object} req - Objeto de solicitud Express.
     * @param {Object} res - Objeto de respuesta Express.
     * @throws {Error} - Si hay un error al obtener los productos.
     */
    getProducts: async (req, res) => {
        let db;
        try {
            db = await createConnection();

            const [rows, column] = await db.query("SELECT * FROM producto")
            res.json(rows);
        } catch (error) {
            console.error(error);
        } finally {
            db.end();
        }
    },

    /**
     * Elimina un producto por su ID.
     * @function
     * @memberof module:controllers/products.controller
     * @async
     * @param {Object} req - Objeto de solicitud Express.
     * @param {Object} res - Objeto de respuesta Express.
     * @throws {Error} - Si hay un error al eliminar el producto.
     */
    deleteProduct: async (req, res) => {
        const idproducto = req.params.idproducto;
        let db;
        try {
            db = await createConnection();

            const [rows, column] = await db.query("DELETE FROM producto WHERE idproducto = ?", [idproducto])
            res.json(rows);
        } catch (error) {
            console.error(error);
        } finally {
            db.end();
        }
    },

    /**
     * Actualiza un producto por su ID.
     * @function
     * @memberof module:controllers/products.controller
     * @async
     * @param {Object} req - Objeto de solicitud Express.
     * @param {Object} res - Objeto de respuesta Express.
     * @throws {Error} - Si hay un error al actualizar el producto.
     */
    updateProduct: async (req, res) => {
        const idproducto = req.params.idproducto;
        let db;
        try {
            db = await createConnection();

            const [rows, column] = await db.query("UPDATE producto SET ? WHERE idproducto = ?", [req.body, idproducto])
            res.json(rows);
        } catch (error) {
            console.error(error);
        }
    },

    /**
     * Crea un nuevo producto.
     * @function
     * @memberof module:controllers/products.controller
     * @async
     * @param {Object} req - Objeto de solicitud Express.
     * @param {Object} res - Objeto de respuesta Express.
     * @throws {Error} - Si hay un error al crear el producto.
     */
    createProduct: async (req, res) => {
        let db;
        try {
            db = await createConnection();

            const [rows, column] = await db.query("INSERT INTO producto SET ?", [req.body])
            res.json(rows);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = productsController;
