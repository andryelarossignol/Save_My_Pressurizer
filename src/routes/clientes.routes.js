const { Router } = require('express');
const ClientesController = require('../controllers/ClientesController');

const clientesRoutes = Router();
const clientesController = new ClientesController();

clientesRoutes.get('/', clientesController.index)
clientesRoutes.post('/:user_id', clientesController.create)
clientesRoutes.get('/:id', clientesController.show)
clientesRoutes.delete('/:id', clientesController.delete)

module.exports = clientesRoutes;



