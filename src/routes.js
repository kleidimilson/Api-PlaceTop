const { Router } = require('express');



const MercadoController = require('./controllers/MercadoController');
const RestauranteController = require('./controllers/RestauranteController');
const PadariaController = require('./controllers/PadariaController');
const HospitalController = require('./controllers/HospitalController');
const HotelController = require('./controllers/HotelController');
const UserController = require('./controllers/UserController');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Api que cadastra e retorna um guia comercial de Campo Maior')
})


routes.get('/login', UserController.verificar);

routes.get('/login/users', UserController.index);
routes.post('/login', UserController.store);
routes.delete('/login', UserController.delete);


routes.get('/mercados', MercadoController.index);
routes.post('/mercados', MercadoController.store);
routes.delete('/mercados', MercadoController.delete);



routes.get('/restaurantes', RestauranteController.index);
routes.post('/restaurantes', RestauranteController.store);
routes.delete('/restaurantes', MercadoController.delete);


routes.get('/padarias', PadariaController.index);
routes.post('/padarias', PadariaController.store);
routes.delete('/padarias', MercadoController.delete);


routes.get('/hospitais', HospitalController.index);
routes.post('/hospitais', HospitalController.store);
routes.delete('/hospitais', MercadoController.delete);


routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelController.store);
routes.delete('/hoteis', MercadoController.delete);

module.exports = routes;