const express = require('express');


const path = require('path');
const port = process.env.PORT || 3000; // para consultar los puertos, buscar "iso reserved ports"

const app = express(); // objeto principal

var bodyparser = require('body-parser');

app.use(bodyparser.json()); // encapsulamos la funcionalidad json del bodyparser dentro del app

app.use(express.static('public')); // Se le dice a la app que la carpeta que va a usar express se llama public


// Vamos a implementar una API de prueba
// se arranca la pagina de html cuando entramos al buscador la peticion get url http://localhost:3000/

app.get('/',function(req,res){
    res.sendFile(path.joint(__dirname,'public/index.html')) })

var data = { ////inicializamos el JSON 
    "ID":'',
    "TEMP":0
    //"HUM":0
};

var luces = {    //inicializamos el JSON del estado de las luces
    "L1":false,
    "L2":false,
    "L3":false,
    "L4":false
  }




// CONSEGUIR Y GRAFICAR LOS DATOS DE TEMPERATURA Y HUMEDAD
app.post('/data_esp',function(req, res){ //El esp hace el POST
    var data = req.body;

    var ID = data.ID; // Se guarda los datos ID y Temp en "data"
    var Temp = data.TEMP;
    //var Hum = data.HUM;

    console.log("ID"+ ID);
    console.log("Temp"+ Temp);
    //console.log("Hum"+ Hum);

    res.status(200).send("OK");

});


app.get('/data_graph',function(req, res){ // El front end hace un GET para tener los datos de temperatura
    console.log("GET: data_graph");
    res.status(200).send(JSON.stringify(data));


});


// ACTUALIZAR LOS ESTADOS DE LAS LUCES

// API de la peticion post del front end (script.js)
app.post('/data_luces',function(req, res){
    console.log(req.body);
    luces=req.body;
    res.status(200);
})


// API de la peticion get del Cliente (ESP32)
app.get('/data_luces_ESP',function(req, res){
    res.status(200).send(JSON.stringify(luces));
})


//inicializamos el server
app.listen(port);
console.log('Servidor iniciado en: ' + port);