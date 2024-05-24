const Produto = require("../model/Produto");

const findProductByIdService = (id) => {
    return Produto.findById(id);
}

const findAllProductsService = () => {
    return Produto.find();
}

const createProductService = (body) => {
    return Produto.create(body);
}

const updateProductByIdService = (id, body) => {
    return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteProductByIdService = (id) => {
    return Produto.findByIdAndRemove(id);
}

module.exports = {
    findProductByIdService,
    findAllProductsService,
    createProductService,
    updateProductByIdService,
    deleteProductByIdService
}