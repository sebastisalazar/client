//Importaciones de 3ros
const express = require("express");
const router = express.Router();

//importaciones locales
const {iniciarSesion,mostrarFormulario}=require('../controllers/users.controllers')

// mostrar formulario
router.get('/login',mostrarFormulario)
router.post('/login',iniciarSesion)


//exporta el objeto
module.exports=router