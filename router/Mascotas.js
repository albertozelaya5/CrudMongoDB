const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota');//se importa el modelo de mascota

router.get('/', async (req, res) => {
     try {
          const arrayMascotaDB = await Mascota.find();//se usa el await para que espere a que se ejecute la query
          console.log(arrayMascotaDB)

          res.render("mascotas",{
               arrayMascotas: arrayMascotaDB//nombre e propiedad: valores
               /* arrayMascotas:[
                    {id:1, nombre:"rex",descripcion:"rex descripcion"},
                    {id:2, nombre:"chanchan",descripcion:"chanchan descripcion"}
               ] */
          })
     } catch (error) {
          console.log(error);
     }

     
});

module.exports = router;//se exporta el modulo para que se pueda usar en app.js