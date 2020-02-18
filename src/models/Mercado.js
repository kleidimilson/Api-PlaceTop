const mongoose = require('mongoose');


const MercadosSchema = new mongoose.Schema({
    mercadoNome: String,
    cidade: String,
    contato: String,
});

module.exports = mongoose.model('Mercados', MercadosSchema);

