const mongoose = require('mongoose');


const HoteisSchema = new mongoose.Schema({
    hotelNome: String,
    cidade: String,
    contato: String,
});

module.exports = mongoose.model('Hoteis', HoteisSchema);

