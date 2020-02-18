const mongoose = require('mongoose');


const PadariasSchema = new mongoose.Schema({
    padariaNome: String,
    cidade: String,
    contato: String,
});

module.exports = mongoose.model('Padaria', PadariasSchema);

