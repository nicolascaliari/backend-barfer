const userModel = require('../models/user');
const { tokenSing } = require('../helpers/generateToken');
const { compare, encrypt } = require('../helpers/handleBcrypt');
const { httpError } = require('../helpers/handleError')

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email)
        const user = await userModel.findOne({ where: { email } })

        if (!user) {
            res.status(404).send('Usuario no encontrado');
        }

        console.log("user : " + JSON.stringify(user))
        console.log("user : " + JSON.stringify(user.idusuarios))

        const checkPassword = await compare(password, user.password)


        const tokenSession = await tokenSing(user)

        if (checkPassword) {
            res.send({
                data: user,
                tokenSession
            })
            return
        }

        if (!checkPassword) {
            res.status(409)
            res.send({
                error: 'Invalid password'
            })
            return
        }
    } catch (err) {
        console.error(err);
    }
}



const register = async (req, res) => {
    try {
        const { email, password, nombre } = req.body

        console.log(email, password, nombre)
        const passwordHash = await encrypt(password)
        const registerUser = await userModel.create({
            email,
            nombre,
            password: passwordHash
        })

        res.send({ data: registerUser })

    } catch (e) {
        httpError(res, e)
    }
}


module.exports = { login, register }