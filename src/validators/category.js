const { check } = require('express-validator');
const { validateHelper } = require('../helpers/validateHelper');


const validateCreateCategory = [
    check('image').notEmpty().withMessage('La imagen es obligatoria'),
    check('name').notEmpty().withMessage('El nombre es obligatorio'),
    (req, res, next) => {
        validateHelper(req, res, next);
    }]


module.exports = { validateCreateCategory };

