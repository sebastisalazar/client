const express=require('express')

const iniciarSesion=async(req,res)=>{

    //captura los valores que vienen del formulario
    const body=req.body

    //variable para guardar la respuesta en formato json
    let data;

    //captura la respuesta de la API en ese ENDPOINT
    const respuesta = await fetch('http://localhost:3000/api/v1/auth',{
                                   method:'post',
                                   headers:{'Content-type':'application/json'},
                                   body: JSON.stringify(body) //formato a JSON
                                })

    // transforma la respuesta a  formato JSON (porque siempre hay una respuesta de la API)
    data = await respuesta.json()
    console.log(data.token)//esto se ve desde CMD no en consola del navegador

    //Si el "ok" dentro de la respuesta es true
    if (respuesta.ok) {
         //redirige a servicios
        res.redirect(`/servicios`);
    }else{
        //si no redirige otra vez al login
        res.render('login.ejs',{data})
    }

     //redirige a servicios y ademas envia el token por parametro
    //res.redirect(`/servicios?token=${data.token}`)
    
}

const mostrarFormulario=async(req,res)=>{

    res.render('login.ejs')
}

module.exports={iniciarSesion,mostrarFormulario}