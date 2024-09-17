const { Router } = require('express');

const usersRoutes = require('./users.routes');
const clientesRoutes = require('./clientes.routes');

const routes = Router();
routes.use('/users', usersRoutes);
routes.use('/clientes', clientesRoutes);

module.exports = routes;
