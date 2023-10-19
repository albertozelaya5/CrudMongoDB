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
//para leer variable :id
//en mongo se usa el _id, otra oopcion es definir la constante con el guion bajo
//el id, tambien se puede poner nombre
router.get('/:id', async (req, res) => {
     const id = req.params.id;
     try {
          const mascotaDB = await Mascota.findOne({ _id: id });//se busca por id
          console.log(mascotaDB);
          res.render('detalle', {
               mascota: mascotaDB,
               error: false
          })
     } catch (error) {
          console.log(error);
          res.render('detalle', {
               error: true,
               mensaje: 'No se encuentra el id seleccionado'
          })
     }
})

router.delete('/:id', async (req, res) => {
     const id = req.params.id;

     try {
          const mascotaDB = await Mascota.findByIdAndDelete({ _id: id })
          if (mascotaDB) {
               res.json({
                    estado: true,
                    mensaje: 'Eliminado'
               })
          } else {
               res.json({
                    estado: false,
                    mensaje: 'Fallo al eliminar'
               })
          }
     } catch (error) {
          console.log(error);
     }
})

router.put('/:id', async (req, res) => {
     const id = req.params.id;
     const body = req.body;
     try {//se envia lo que modificamos, es la estructura del update
          const mascotaDB = await Mascota.findByIdAndUpdate(id, body, { useFindAndModify: false })
          console.log(mascotaDB);
          res.json({
               estado: true,
               mensaje: 'Editado'
          })
     } catch (error) {
          console.log(error);
          res.json({
               estado: false,
               mensaje: 'Fallo al editar'
          })
     }
})

module.exports = router;//se exporta el modulo para que se pueda usar en app.js