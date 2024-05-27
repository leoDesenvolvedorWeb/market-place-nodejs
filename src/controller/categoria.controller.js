const categoriaService = require("../service/categoria.service");

const findCategoriaByIdController = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const findAllCategoriaService = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.findAllCategoriaService());
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const createCategoriaService = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            createdAt: new Date(),
        }
        res.status(201).send(await categoriaService.createCategoriaService(corpo));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const updateCategoriaService = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

const deleteCategoriaService = async (req, res) => {
    try{
        res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
    }catch(err){
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
};

module.exports = {
    findCategoriaByIdController,
    findAllCategoriaService,
    createCategoriaService,
    updateCategoriaService,
    deleteCategoriaService
};