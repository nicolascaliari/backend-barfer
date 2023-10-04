const createConnection = require('../db');

const userController = {

    getUser: async (req, res) => {
        try {

            const dbConennection = await createConnection();
            const [rows, column] = await dbConennection.query("SELECT * FROM usuarios")
            res.json(rows);
        } catch (error) {
            console.error(error);
        }
    },
    createUser: async (req, res) => {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const email = req.body.email;
        const password = req.body.password;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const provincia = req.body.provincia;
        const localidad = req.body.localidad;
        const piso = req.body.piso;

        const db = await createConnection();

        db.query("INSERT INTO usuarios(nombre,apellido, email, password,direccion,telefono,provincia,localidad,piso) VALUES(?,?,?,?,?,?,?,?,?)", [nombre, apellido, email, password, direccion, telefono, provincia, localidad, piso],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("usuario registrado con exito");
                }
            }
        );
    }


}



module.exports = userController;