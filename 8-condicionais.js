console.log(`Trabalhando com Codicionais`);

const passagem = true;
const acompanhada = true;
const idade = 21;
const listaDestinos = new Array(    
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`
);

console.log(`Destinos Possiveis: `);
console.log(listaDestinos);

// if(idade >= 18){
//     console.log(`Maior de idade:`)
//     listaDestinos.splice(0, 1);

// }else{
//     if(acompanhada){
//         console.log(`Menor de idade acompanhado:`)
//         listaDestinos.splice(0, 1);
//     }else{
//         console.log(`Não é maior de idade não posso vender`)   
//     }
    
// }

// if(idade >= 18){
//     console.log(`Maior de idade:`)
//     listaDestinos.splice(0, 1);
// }else if(acompanhada){
//     console.log(`Menor de idade acompanhado:`)
//     listaDestinos.splice(0, 1);
// }
// else{
//     console.log(`Não é maior de idade não posso vender`)   
// }
    
if(idade >= 18 || acompanhada){
    console.log(`Boa Viajem!`)
    listaDestinos.splice(0, 1);

}else{
    console.log(`Não é maior de idade não posso vender`)      
}

console.log(`Embarque: \n \n`);
if(passagem && idade >= 18){
    console.log(`Boa Viajem!`);
}else{
    console.log(`Você não pode embarcar`)
}

console.log(listaDestinos);

//idade > 18
//idade < 18
//idade >= 18
//idade <= 18
//idade == 18
