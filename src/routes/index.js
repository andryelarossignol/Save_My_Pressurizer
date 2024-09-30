const { Router } = require('express');

const usersRoutes = require('./users.routes');
const clientesRoutes = require('./clientes.routes');
const sessionsRoutes = require('./sessions.routes');
const apiRoutes = require('./api.routes');

const routes = Router();
routes.use('/users', usersRoutes);
routes.use('/clientes', clientesRoutes);
routes.use('/sessions', sessionsRoutes);
routes.use('/pressurizers', apiRoutes);

module.exports = routes;
