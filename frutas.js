const frutas = ['platano','manzana','platano','pera'];
const dinero = 1000;

//se tiene que exportar el array mediante module.exports que es un objeto
module.exports = frutas;
module.exports = {//se exporta a travez de un objeto
     frutas:frutas,//nombre de propiedad y valor
     dinero
}
