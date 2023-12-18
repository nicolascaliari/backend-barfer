const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { encrypt } = require('../helpers/handleBcrypt');


const userController = {
    getUser: async (req, res) => {
        try {

            jwt.verify(req.token, 'secretKey', async (err, authData) => {
                if (err) {
                    res.sendStatus(403);
                }
                else {
                    const users = await User.findAll();
                    res.json(users);
                }
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener usuarios');
        }
    },
    createUser: async (req, res) => {
        try {

            const { nombre, email, password, rol } = req.body;

            console.log(nombre, email, password, rol);
            const passwordHash = await encrypt(password);

            const user = await User.create({ nombre, email, passwordHash, rol });
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear usuario');
        }
    }
};

module.exports = userController;
