const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller")

//rotas get
router.get('/findById/:id', usuarioController.findAllUsercontroller);
router.get('/findAll', usuarioController.findAllUsercontroller);

//rotas post
router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProductController);

//rotas put
router.put('/update/:id', usuarioController.updateUserController);

//rotas delete
router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAddress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removerUserFavProductController);

module.exports = router;