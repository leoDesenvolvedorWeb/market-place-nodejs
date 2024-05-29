const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    try{
        res.send(await produtoService.findProductByIdService(req.params.id));
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const findAllProductsController = async (req, res) => {
    try{
        res.send(await produtoService.findAllProductsService());
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const createProductController = async (req, res) => {
    try{
        const corpo = {
            ...req.body,
            userId: req.userId,
            CreatedAt: new Date(),
        }

        res.send(await produtoService.createProductService(corpo));
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

const updateProductController = async (req, res) => {
    try{
        res.send(await produtoService.updateProductService(req.params.id, req.body));
    }catch{
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
    }
}

async function deleteProductController(req, res) {
    try {
        // Seu código para deletar o produto
        const result = await Produto.deleteOne({ _id: req.params.id });
        if (result.deletedCount === 0) {
            return res.status(404).send({ message: 'Produto não encontrado' });
        }
        res.status(200).send({ message: 'Produto deletado com sucesso' });
    } catch (err) {
        console.log("erro: " + err.message);
        res.status(500).send({ message: 'Erro ao deletar produto' });
    }
}

// const deleteProductController = async (req, res) => {
//     try{
//         res.send(await produtoService.deleteProductService(req.params.id));
//     }catch{
//         console.log(`erro: ${err.message}`);
//         return res.status(500).send({ message: `Erro inesperado, tente novamente!`});
//     }
// }

module.exports = {
    findProductByIdController,
    findAllProductsController,
    createProductController,
    updateProductController,
    deleteProductController
};