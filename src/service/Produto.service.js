const Produto = require("../model/Produto");

const findProductByIdService = (id) => {
    return Produto.finById(id);
}

const findAllProductsService = () => {
    return Produto.find();
}

const createProductService = (body) => {
    return Produto.fincreate(body);
}

const updateProductByIdService = (id, body) => {
    return Produto.finByIdAndUpdate(id, body, { returnDocument: "after"});
}

const deleteProductByIdService = (id) => {
    return Produto.finByIdAndRemove(id);
}

module.exports = {
    findProductByIdService,
    findAllProductsService,
    createProductService,
    updateProductByIdService,
    deleteProductByIdService
}