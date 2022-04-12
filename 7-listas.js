console.log(`Trabalhando com Listas`);

//ctrl + k + c Bota em comentario
//ctrl + k + u Tira de comentario

const listaDestinos = new Array(    
    `São Paulo`,
    `Rio De Janeiro`,
    `Curitiba`
);
console.log(listaDestinos);

listaDestinos.push(`Salvador`); //Adiciona um item
console.log(listaDestinos);

listaDestinos.splice(0, 1); //Retira um item
console.log(listaDestinos);

console.log(listaDestinos[1]);
console.log(listaDestinos[1], listaDestinos[0]);