const { check } = require('express-validator');
const { validateHelper } = require('../helpers/validateHelper');

const validateCreateUser = [
    check('nombre').exists().withMessage('El campo nombre es obligatorio')
        .isString().withMessage('El campo nombre debe ser un string'),
    check('email').exists().withMessage('El campo email es obligatorio'),
    check('password').exists().withMessage('El campo password es obligatorio')
        .isString().withMessage('El campo password debe ser un string'),
    (req, res, next) => {
        validateHelper(req, res, next);
    }
];


module.exports = { validateCreateUser };