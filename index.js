const numeros = [0,1,2,3,4,5,10,15];
const letras = ['a','b','c','d','e','f','g','h','h'];

let suma = 0;
let contador = {};//cando no son numericos

letras.forEach((item) => {
     if(contador[item]){
          contador[item]++;
     }else{
          contador[item] = 1;
     }
});

letras.forEach((item) => {
     suma +=item;
});

numeros.forEach((item) => {
    suma +=item;
});

console.log(suma);

console.log(contador);