const { verifyToken } = require('../helpers/generateToken')
const userModel = require('../models/user')

const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()

        const tokenData = await verifyToken(token)
        const userData = await userModel.findOne({ _id: tokenData._id })

        if ([].concat(roles).includes(userData.role)) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos de administrador' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }

}

module.exports = { checkRoleAuth };