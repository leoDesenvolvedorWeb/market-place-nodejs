const findUserByIdcontroller = async (req,res) => {
    try{
        

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
    
};

const findAllUsercontroller = async (req, res) =>{
    try{
        

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const createUserController = async (req, res) => {
    try{
        

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const updateUserController = async (req, res) =>{
    try{
        

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const removeUserController = async (req, res) => {
    try{

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const addUserAddressController = async (req,res) =>{
    try{
        

    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send("erro no servidor, tente novamente mais tarde");
    }
};

const removeUserAddressController = async (req,res) =>{
    try{
        

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