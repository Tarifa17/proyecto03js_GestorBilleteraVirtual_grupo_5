const express = require('express');
const path = require("path");

const app = express();

// Sirve archivos estáticos desde la carpeta "public"
    app.use(express.static(path.join(__dirname, 'public')));

//endpoint --forma de acceder al sv
    app.get('/', (req,res) =>{
        res.sendFile(__dirname+"/public/views/index.html")

    });

//routing

//listening 
    app.listen(5000, () =>{
        console.log("Servidor corriendo");

    });