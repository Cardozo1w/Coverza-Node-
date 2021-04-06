const express = require('express');
const router = require('./routes/index');
const db = require('./config/db');


require('./config/db');



//Habilitar express
const app = express();
const port = process.env.PORT || 3200;

app.use('/', router);
express.json();
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {

console.log(`Servidor corriendo sobre el puerto ${port}`);

})


