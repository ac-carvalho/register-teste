const express = require('express');

const RegisterController = require('./controllers/RegisterController');
const AuthController = require('./controllers/AuthController');

const routes = express.Router();

routes.get('/register', RegisterController.index);
routes.post('/register', RegisterController.create);

routes.post('/auth', AuthController.create);

module.exports = routes;