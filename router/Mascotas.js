const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
     res.render("mascotas",{
          arrayMascotas:[
               {id:1, nombre:"rex",descripcion:"rex descripcion"},
               {id:2, nombre:"chanchan",descripcion:"chanchan descripcion"}
          ]
     })
});

module.exports = router;//se exporta el modulo para que se pueda usar en app.js