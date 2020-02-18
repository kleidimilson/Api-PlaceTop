const mongoose = require('mongoose');


const HospitaisSchema = new mongoose.Schema({
    hospitalNome: String,
    cidade: String,
    contato: String,
});

module.exports = mongoose.model('Hospitais', HospitaisSchema);

