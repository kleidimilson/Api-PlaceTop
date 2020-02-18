const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    nome: String,
    senha: Number,
});

module.exports = mongoose.model('User', userSchema);

