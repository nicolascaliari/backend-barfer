const checkAuth = async (req, res, next) => {
    const token = req.headers['authorization'];   

    if(typeof token !== 'undefined'){
        const bearer = token.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.status(403).json({error: 'No tienes permisos'});
    }
}


module.exports = { checkAuth };