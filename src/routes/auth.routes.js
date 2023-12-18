const express = require('express');
const { login, register } = require('../controllers/auth.controller');


const route = express.Router();

/**
 * @openapi
 * tags:
 *   - name: auth
 *     description: User management
 */

/**
 * Post track
 * @openapi
 * /auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Loging user"
 *      description: Este endpoint es para que el usuario pueda loggearse devolviendo un token
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/authLogin"
 *      required:
 *        - email
 *        - password
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la colección.
 *        '422':
 *          description: Error de validación.
 *      security:
 *       - ffofofof: []
 */
route.post('/login', login);




/**
 * Post track
 * @openapi
 * /register:
 *    post:
 *      tags:
 *        - auth
 *      summary: "register user"
 *      description: Este endpoint es para que poder registrarse
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/authRegister"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *       - ffofofof: []
 */
route.post('/register', register);


module.exports = route;