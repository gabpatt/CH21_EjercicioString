let nombre= "Laura Aline";
let nuevo = "";

function invertido(){
    for (let i=nombre.length-1; i>=0; i--){
        nuevo += nombre[i];
    }
    return nuevo;
}
console.log(invertido ("Laura Aline"));



//Palindromo: palabra o frase que se lee igual de izq a derecha que de derecha a izq
// amma, Otto, Anina, Natan, Siris, Ana, Ada, Aziza, Ramar, Nayan



function esPalindro(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
  
    return str.toLowerCase().split(' ').join('') ==
      newStr.toLocaleLowerCase().split(' ').join('')
      ? `${str} es un palindromo`
      : `${str} no es un palindromo`;
  }