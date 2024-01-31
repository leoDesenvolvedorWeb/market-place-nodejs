const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUsersService = () => {
    return Usuario.find();
}

const createUsersService = (body) => {
    return Usuario.create(body);
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, {returnDocumente: "after"}); //para não retorna o mesmo documente do banco
}

const removerUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
}

const addUserAddressService = (id, endereco) => {
    
}

const removerUserAddressService = (id) => {
    
}

const addUserFavProductService = (id, produto) => {
    
}

const removerUserFavProductService = (produto) => {
    
}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUsersService,
    updateUserService,
    removerUserService,
    addUserAddressService,
    removerUserAddressService,
    addUserFavProductService,
    removerUserFavProductService,
}