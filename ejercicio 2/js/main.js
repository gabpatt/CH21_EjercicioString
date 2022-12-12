let nombre= "Laura Aline";
let nuevo = "";

function invertido(){
    for (let i=nombre.length-1; i>=0; i--){
        nuevo += nombre[i];
    }
    return nuevo;
}
console.log(invertido ("Laura Aline"));