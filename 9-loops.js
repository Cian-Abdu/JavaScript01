console.log(`Trabalhando com Codicionais`);


const listaDestinos = new Array(
    `Salvador`,    
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`
);

let contador = 0;
let destinoExiste = false;
let passagem = false;
const acompanhada = true;
const idade = 21;
const destino = "Salvador";

console.log(`Destinos Possiveis: \n`);
console.log(listaDestinos);

const podeComprar = idade >= 18 || acompanhada == true;

while(contador < 4){
    if(listaDestinos[contador] == destino){
        destinoExiste = `Destino existe.`;
        break;
    }
    contador = contador + 1;
}

// for(let cont = 0; cont < 4; cont ++){
//     if(listaDestinos[contador] == destino){
//         destinoExiste = `Destino existe.`;
//         break;
//     }
// }

console.log(destinoExiste);

if(podeComprar && destinoExiste){
    console.log(`Boa Viajem!`);
}else{
    console.log(`Desculpa, tivemos um erro.`);
}


