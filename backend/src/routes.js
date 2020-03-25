const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

routes.use(express.json());

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.post("/sessions", SessionController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incident", IncidentController.create);
routes.delete("/incident/:id", IncidentController.delete);

module.exports = routes;
