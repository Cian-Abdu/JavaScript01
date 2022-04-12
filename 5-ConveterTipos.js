console.log("Conversão de Tipos");

console.log(parseInt("2") + parseInt("2")); //Conversão Texto -> Número Inteiro
console.log(parseInt("2") + parseInt("2.5")); //O texto número Float é transformado em Inteiro
console.log(parseFloat("2") + parseFloat("2.5")); //Conversão Texto -> Número Float

console.log("10" / "5") //A operacao ocorre por que só existe divisão de numeros
console.log("Ricardo" / "5") //O resultado é NaN a ausencia de numero

console.log("10" * "5") //A operacao ocorre por que só existe divisão de numeros
console.log("Ricardo" * "5") //O resultado é NaN a ausencia de numero