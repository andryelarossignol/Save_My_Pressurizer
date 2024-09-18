const { Router } = require('express');
const ClientesController = require('../controllers/ClientesController');
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const clientesRoutes = Router();
const clientesController = new ClientesController();

clientesRoutes.use(ensureAuthenticated);

clientesRoutes.get('/', clientesController.index)
clientesRoutes.post('/', clientesController.create)
clientesRoutes.get('/:id', clientesController.show)
clientesRoutes.delete('/:id', clientesController.delete)

module.exports = clientesRoutes;



