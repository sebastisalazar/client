//Importaciones de 3ros
const express = require("express");
const router = express.Router();

//importaciones locales
const {verTodosServicios,iniciarSesion}=require('../controllers/servicios.controllers')

// mostrar servicios
router.get('/',verTodosServicios)

//exporta el objeto
module.exports=router