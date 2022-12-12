// ejercicios de String
//usando .chartAt - podemos saber cuantas veces esta un caracter en un string


let nombre = "Gabriela";
nombre = nombre.toUpperCase();
let letra = "";
let contador = 0;


for (let index=0; index< nombre.length; index++){
    console.log(nombre.charAt(index));
    let temp=1;
    for (let cont = index+1; cont < nombre.length; cont++){
        if(nombre.charAt(index) == nombre.charAt(cont))
            temp++;
    }
    if(temp>contador){
        contador=temp;
        letra=nombre.charAt(index);
    }
}
console.log(letra, contador);