const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileCOntroller');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;


/**
routes.post('/users', (request, response) => {
    // const params = request.query;
    // const params = request.params;
    const params = request.body;
    console.log(params);
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Lucas Zampiva'
    });
});
**/