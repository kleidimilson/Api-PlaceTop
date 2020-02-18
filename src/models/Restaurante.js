const mongoose = require('mongoose');


const RestaurantesSchema = new mongoose.Schema({
    restauranteNome: String,
    cidade: String,
    contato: String,
});

module.exports = mongoose.model('Restaurantes', RestaurantesSchema);

