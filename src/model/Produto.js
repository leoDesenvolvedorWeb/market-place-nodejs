const mongoose = require("mongoose");

const ProdutoSchema = new mongoose.Schema({
    nome: { type: String, unique: true, required: true},
    descricao: { type: String, required: true},
    precoUnitario: { type: Number, required: true},
    imagem: { type: String, required: true},
    codigoBarra: { type: Number, unique: true, required: true},
    // categoria: [
    //     {
    //             _id: { type: mongoose.Schema.types.ObjectId, required: true, unique: true, ref: "categoria" },
    //             creatAt: { type: Date, required: true}
    //     },
    // ],
});


const Produto = mongoose.model("produtos", ProdutoSchema);

module.exports = Produto;