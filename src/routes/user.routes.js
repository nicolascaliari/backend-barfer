const express = require('express');
const userController = require('../controllers/user.controllers');

const route = express.Router();



route.get('/', userController.getUser);
route.post('/create' , userController.createUser);



module.exports = route;