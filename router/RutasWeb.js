const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {//en la pagina raiz, por ello el /
     res.render("index",{titulo: "mi titulo dinamico"})//SE RENDERIZA LA PAGINA EN CUESTION
});
/* siu */
router.get("/servicios",(req,res)=>{//en el / se define una pagina dentrro del puerto
     res.render("servicios",{tituloServicios: "este es un mensaje dinamico de servicios"})
});

module.exports = router;//se exporta el modulo para que se pueda usar en app.js