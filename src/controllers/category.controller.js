const Category = require('../models/category');



const categoryController = {

    createCategory: async (req, res) => {
        try {
            const category = req.body;

            console.log(category);
            const newCategory = await Category.create(category);
            res.json(newCategory);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error al crear categoria');
        }
    },
    getCategory: async (req, res) => {
        try {
            const category = await Category.findAll();
            res.json(category);

        } catch (err) {
            console.error(err);
            res.status(500).send('Error al obtener categoria');
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { id } = req.body;

            const category = await Category.findByPk(id);

            if (!category) {
                return res.status(404).send('Categoria no encontrada');
            }

            const updateCategory = await category.update(req.body);

            res.json(updateCategory);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error al actualizar categoria');
        }
    },
    deleteCategory: async (req, res) => {
        try {

            const id = req.query.id;

            const category = await Category.findByPk(id);

            if (!category) {
                return res.status(404).send('Categoria no encontrada');
            }

            const deleteCategory = await category.destroy();

            res.json(deleteCategory);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error al eliminar categoria');
        }
    }
};


module.exports = categoryController;