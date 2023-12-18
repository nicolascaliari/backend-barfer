const Product = require('../models/products')

/**
 * Controlador de productos.
 * @module controllers/products.controller
 */
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
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener productos');
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
        try {
            const product = await Product.findByPk(idproducto);
            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }
            await product.destroy();
            res.json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar el producto');
        }
    },

    updateProduct: async (req, res) => {
        const idproducto = req.params.idproducto;
        try {
            const product = await Product.findByPk(idproducto);
            if (!product) {
                return res.status(404).send('Producto no encontrado');
            }
            await product.update(req.body);
            res.json({ message: 'Producto actualizado correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al actualizar el producto');
        }
    },

    createProduct: async (req, res) => {
        try {
            const producto = req.body;
            console.log(producto);
            res.json(producto);
            await Product.create(req.body);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el producto');
        }
    }
}

module.exports = productsController;
