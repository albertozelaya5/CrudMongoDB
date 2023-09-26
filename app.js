
const express = require('express');
const app = express();
/* PRIMERO DEFINIR EL REQUIRE EXPRESS, LUEGO GUARDARLO EN UNA VARIABLE */
/* SEFUIDO DEFINIR PUERTO, LUEGO EL INDEX, LAS PAGINAS Y HASTA ABAJO DE TODO EL 404 */
const port = 3000;//despues de definir el puerto usar el express estatico

//motor de plantillas
app.set("view engine", "ejs");/* VISTAS SOLO ARCHIVOS EJS */
app.set('views', __dirname + '/views');//se tiene que acceder a la carpeta views, por eso el dirname

//Rutas Web//se le puede cambiar nombre a la carpeta
app.use('/',require('./router/RutasWeb'));//se usa el modulo de rutas web
app.use('/mascotas',require('./router/mascotas'));//se usa el modulo de rutas web

/* EN LAS APP.GET SE CONFIGURAN LAS URL, APP USE ES PARA DEFINIR LAS CARPETAS EN USO TIPO PUBLIC Y VIEWS */
app.use(express.static(__dirname + '/public'));//se define la carpeta publica para que se pueda acceder a ella

//para la 404 se usa no un get, sino un use
app.use((req,res,next)=>{
     res.status(404).render("404", {
          titulo: "404",
          descripcion: "titulo del sitio web"
     })
})

app.listen(port,()=>{
     console.log("servidor a su servicio brrr", port);
});



