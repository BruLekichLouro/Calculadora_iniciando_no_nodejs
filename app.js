var calculadora = require("./operacoes");
var http = require("http");

//Criando servidor: qq outra pessoa poderia acessar
http.createServer(function(requisicao, resposta){
    resposta.end("Bem vindo ao meu site");
}).listen(2727);
console.log("Meu servidor está rodando!");
//No navagador eu digito: http://localhost:2727

console.log(calculadora.mult(10,3));
console.log(calculadora.div(10,5));


