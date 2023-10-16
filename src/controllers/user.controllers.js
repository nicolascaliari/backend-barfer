const User = require('../models/user'); // Importa el modelo User

const userController = {
    getUser: async (req, res) => {
        try {
            const users = await User.findAll(); // Usa la función findAll() para obtener todos los usuarios
            res.json(users);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener usuarios');
        }
    },
    createUser: async (req, res) => {
        try {
            const userData = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: req.body.password,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                provincia: req.body.provincia,
                localidad: req.body.localidad,
                piso: req.body.piso,
            };

            const user = await User.create(userData); // Crea un nuevo usuario en la base de datos
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear usuario');
        }
    }
};

module.exports = userController;
