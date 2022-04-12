console.log("Atribuição de Variaveis")

//Usar uma variavel const
const nome = "Hideki";
const sobrenome = "Nakashima";

console.log(nome + sobrenome); // Fica sem espaço
console.log(nome, sobrenome); //Forma 1
console.log(nome + " " + sobrenome); // Forma 2

console.log(`Meu nome é ${nome} ${sobrenome}`); // Isso é uma crase não uma aspas simples

//nome = nome + sobrenome
//console.log(nome)
const nomeCompleto = nome + sobrenome //Manter o variavel constante
console.log(nomeCompleto);

//Usar uma variavel let
let contador = 0;
contador = contador + 1;
console.log(contador);

let idade; //Declarar
idade = 29; //Atribuir
