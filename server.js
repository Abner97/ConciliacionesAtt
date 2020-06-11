/**
* Este script crea el servidor para que la app funcione en Heroku.
* 
*Está creado usando express.js
*No borrar el archivo Aptfile necesario para que la app funcione correctamente en Heroku. 
* @author Abraham Vega
* @date 10-06-2020
*/



//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/spa'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/spa/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);