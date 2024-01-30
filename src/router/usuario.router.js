const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller")

router.get('/findById:id', usuarioController.findAllUsercontroller);
router.get('/findAll', usuarioController.findAllUsercontroller);


router.post('/create', usuarioController.createUserController);
router.post('/addAddress/:id', usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', usuarioController.addUserFavProduct);

router.put('/update/:id', usuarioController.updateUserController);

router.delete('/remove/:id', usuarioController.removeUserController);
router.delete('/removeAddress', usuarioController.removeUserAddressController);
router.delete('/removeFavProduct', usuarioController.removerUserFavProduct);

module.exports = router;