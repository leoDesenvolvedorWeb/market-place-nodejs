const userService = require("../service/usurio.service");

const findUserByIdcontroller = async (req,res) => {
    try{
        const user = await userService.findAllUsersService(req.params.id);

        if(!user){
            return res.status(404).send ({message: "Usuario nao encontrado, tente novamente"});
        }

        return res.status(200).send(user);

    }catch(err){
        if(err.kind == "ObjectId"){
            return res.status(400).send({ message: `ID informado, estar incorreto, tente novamente!`})
        }
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ menssage:"Erro inasperado tente novamente!"});
    }
    
};

const findAllUsercontroller = async (req, res) =>{
    try{
        return res.status(200).send(await userService.findAllUsersService());

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const createUserController = async (req, res) => {
    try{
        const body = req.body;

        if(!body.nome){
            return res.status(400).send({ menssage: `O campo 'nome' precisa ser preenchido`});
        }

        return res.status(201).send(await userService.createUsersService(body));

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const updateUserController = async (req, res) =>{
    try{
        const body = req.body;

        if(!body.nome){
            return res.status(400).send({ menssage: `O campo 'nome' precisa ser preenchido`});
        }

        return res.status(201).send(await userService.updateUserService(req.params.id, body));

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const removeUserController = async (req, res) => {
    try{

        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser);

        if(deletedUser == null){
            res.status(404).send({ message: `Usuario nao encontrado, tente novamente!`});
        }else{
            res.status(200).send({ message: `Sucesso, usuario deletado!`});
        }

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const addUserAddressController = async (req,res) =>{
    try{
        req.body.createdAt = new Date();
        const endereco = await userService.addUserAddressService(req.params.id, req.body);

        if(endereco.ok == 1){
            res.status(200).send({ message: `Endereco adicionado com sucesso!`});
        }else{
            res.status(400).send({ message: `Algo deu errado no endereço, tente novamente!`});
        }
 
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!`});
    }
};

const removeUserAddressController = async (req,res) =>{
    try{
        const endereco = await userService.removerUserAddressService(req.body.id, req.body.addressId);

        if(endereco.ok == 1){
            res.status(200).send({ menssage: `Endereco removido com sucesso!`});
        }else{
            res.status(400).send({ menssage: `Algo deu errado no endereço, não foi removido, tente novamente!`});
        }

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const addUserFavProductController = async (req,res) =>{
    try{
        

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const removerUserFavProductController = async (req,res) =>{
    try{
        

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

module.exports = {
    findUserByIdcontroller,
    findAllUsercontroller,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removerUserFavProductController,
}