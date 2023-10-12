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
//toda funcion asincrona tipo router recibe un requerimiento y una respuesta
//se pone dentro de la ruta mascotas, por eso se configura en router mascotas/crear
router.get('/crear', (req, res) => {//get es para obtener informacion
     res.render('crear')
})

router.post('/', async (req, res)=>{
     const body = req.body;//se guarda el cuerpo de la peticion en una variable
     //console.log(body);//Funciona siempre y cuando este el body Parser en el app.js
     try {
          const mascotaDB = new Mascota(body);//se crea un nuevo objeto de mascota
          await mascotaDB.save();//se guarda en la base de datos, el redirect es para poner a donde se dirige la informacion
          res.redirect('/mascotas');//se redirige a la pagina de mascotas
          /* Otra manera
          await Mascota.create(body)
          res.redirect('/mascotas') */
     } catch (error) {
          console.log(error);
     }
})

module.exports = router;//se exporta el modulo para que se pueda usar en app.js