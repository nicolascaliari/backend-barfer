const {validationResult} = require('express-validator');

const validateHelper = (req,res,next) => {
    try{
        validationResult(req).throw();
        next();
    }catch(err){
        res.status(400).json({error: err.array()[0].msg});
    }
}

module.exports = {validateHelper}