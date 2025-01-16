// 1 --------------------------------------
console.log("Boas-vindas!!");
// 2 --------------------------------------
var nome = "Rafael";
console.log("Olá, " + nome + " !!");
// 3 --------------------------------------
alert(`Olá, ${nome}`);
// 4 --------------------------------------
var resposta = prompt(`Qual a linguagem de programação que você mais gosta?`);
console.log(`Resposta = ${resposta}`);
// 5 --------------------------------------
var valor1 = parseInt(Math.random() * 10 + 1);
var valor2 = parseInt(Math.random() * 10 + 1);
var resultado = valor1 + valor2;
console.log(`A soma do de ${valor1} e ${valor2} é igual a ${resultado}.`);
// 6 --------------------------------------
var valor3 = parseInt(Math.random() * 10 + 1);
var valor4 = parseInt(Math.random() * 10 + 1);
var resultado2 = valor3 - valor4;
console.log(`A diferença entre ${valor3} e ${valor4} é igual a ${resultado2}.`);
// 7 --------------------------------------
var idadeUsuario = prompt(`Digite a sua idade`);
if (idadeUsuario >= 18) {
    console.log(`Maior de idade`);
} else {
    console.log(`Menor de idade`);
}
// 8 --------------------------------------
var numeroEscolhido = prompt(`Digite um numero`);
if (numeroEscolhido > 0) {
    console.log(`O valor ${numeroEscolhido} é positivo`);
} else {
    if (numeroEscolhido == 0) {
        console.log(`O valor ${numeroEscolhido} é zero`);
    }
    console.log(`O valor ${numeroEscolhido} é negativo`);
}
// 9 --------------------------------------
var contador = 0;
while (contador <= 10) {
    console.log(`Imprimindo ${contador}`);
    contador++;
}
// 10 --------------------------------------
var nota = parseInt(Math.random() * 10 + 1);
if (nota >= 7) {
    console.log(`Aprovado!!`);
} else {
    console.log(`Reprovado!!`);
}
// 11 --------------------------------------
var numAleatorio = Math.random();
console.log(`Exibindo o numero aleatorio: ${numAleatorio}`);
// 12 --------------------------------------
var numAleatorio = parseInt(Math.random() * 10 + 1);
console.log(`Exibindo o numero aleatorio entre 1 e 10: ${numAleatorio}`);
// 13 --------------------------------------
var numAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(`Exibindo o numero aleatorio entre 1 e 1000: ${numAleatorio}`);