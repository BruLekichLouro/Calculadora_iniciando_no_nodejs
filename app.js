var calculadora = require("./operacoes");

function subt(a,b){
    return a-b;
}
function mult(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

console.log(calculadora.mult(10,3));
console.log(calculadora.div(10,5));
