const jwt = require('jsonwebtoken');



const tokenSing = async (user) => {
    return jwt.sign(
        {
            _id: user.idusuarios,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '1h'
        }
    )
}


const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        console.error(err);
    }
}

const decodeSing = (token) => {
    return jwt.decode(token);
}


module.exports = { tokenSing, verifyToken, decodeSing}