const mongoose = require("mongoose");

const perroSchemma = new mongoose.Schema({
  name: String,
});

const Perrito = mongoose.model("Perrito", perroSchemma);

module.exports = Perrito;

