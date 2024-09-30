const {Router} = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const ApiController = require("../controllers/ApiController");

const apiController = new ApiController();

const apiRoutes = Router();
apiRoutes.get("/",ensureAuthenticated, apiController.getMessage);

module.exports =  apiRoutes;
