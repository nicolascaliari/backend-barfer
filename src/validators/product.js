const { check } = require('express-validator');
const { validateHelper } = require('../helpers/validateHelper');


const validateCreateProduct = [
    check('name').notEmpty().withMessage('El nombre es obligatorio'),
    check('description').notEmpty().withMessage('La descripcion es obligatoria'),
    check('price_fivekg').notEmpty().withMessage('El precio por 5kg es obligatorio'),
    check('price_tenkg').notEmpty().withMessage('El precio por 10kg es obligatorio'),
    check('image').notEmpty().withMessage('La imagen es obligatoria'),
    check('idCategory').notEmpty().withMessage('La categoria es obligatoria'),
    (req, res, next) => {
        validateHelper(req, res, next);
    }]


module.exports = { validateCreateProduct };