const express=require('express')

const verTodosServicios=async(req,res)=>{
    //variable para guardar la respuesta en formato json
    let data;

    //captura la respuesta de la API en ese ENDPOINT
    const respuesta = await fetch('http://localhost:3000/api/v1/servicios')

    //si el status de la respuesta (OK) es TRUE lo transforma a formato JSON
    if (respuesta.ok) {
        data = await respuesta.json()
        console.log(data) //esto se ve desde CMD no en consola del navegador
    }

    //se renderiza lo que haya en servicio EJS y se envia la respuesta de la API por headers
    res.render('servicios.ejs',{data})
    
}

module.exports={verTodosServicios}