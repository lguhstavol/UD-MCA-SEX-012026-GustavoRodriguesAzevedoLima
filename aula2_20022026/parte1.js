// Gustavo Rodrigues Azevedo Lima

let comidas = ['Pizza', 'Hambúrguer', 'Lasanha', 'Sushi', 'Churrasco', 'Feijoada', 'Macarronada', 'Tacos', 'Burrito', 'Coxinha', 'Pastel', 'Empada', 'Pão de Queijo', 'Moqueca', 'Estrogonofe', 'Panqueca', 'Sopa', 'Risoto', 'Tapioca', 'Cachorro Quente'];
// A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log("--- Resposta A ---");
console.log(comidas[0]);  
console.log(comidas[7]);  
console.log(comidas[11]); 
console.log(comidas[15]); 
console.log(comidas[18]); 
console.log(comidas[20]);
// B. Qual elemento está na penúltima e última posição?
console.log("\n--- Resposta B ---");
console.log(comidas[comidas.length - 2]);
console.log(comidas[comidas.length - 1]);
// C. Quantos elementos existem no array?
console.log("\n--- Resposta C ---");
console.log(comidas.length)
// D. Adicione um novo elemento ao final do array.
console.log("\n--- Resposta D ---");
comidas.push('Brigadeiro');
console.log("Array atualizada com o novo item no final:",
     comidas[comidas.length - 1]);
// E. Imprima todos os elementos usando um for.
console.log("\n--- Resposta E ---");
for (let i = 0; i < comidas.length; i++) 
    {console.log(comidas[i]);}

// ---------------------------------------------------
// Natalia da Silva Melo Frreira

let frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Morango','Abacaxi', 'Manga',
'Kiwi', 'Pera', 'Melancia','Limão', 'Cereja', 'Mamão', 'Ameixa', 'Goiaba',
'Maracujá', 'Caju', 'Figo', 'Carambola', 'Framboesa']; 

//A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20?
console.log(frutas[0]);   //Maçã
console.log(frutas[7]);   //Kiwi
console.log(frutas[11]);  //Cereja
console.log(frutas[15]);  //Maracujá
console.log(frutas[18]);  //Carambola
console.log(frutas[20]);  //undefined

//B. Qual elemento está na penúltima e última posição?
console.log(frutas[frutas.length - 2]); //Carambola
console.log(frutas[frutas.length - 1]); //Framboesa

//C. Quantos elementos existem no array?
console.log(frutas.length); //20

//D. Adicione um novo elemento ao final do array.
frutas.push('Jabuticaba');
console.log("Array atualizada com o novo item no final:",
     frutas[frutas.length - 1]);
  //Array atualizada com o novo item no final: Jabuticaba

//E. Imprima todos os elementos usando um for.
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
//Maçã, Banana, Laranja, Uva, Morango, Abacaxi, Manga, Kiwi, 
// Pera, Melancia, Limão, Cereja, Mamão, Ameixa, Goiaba, Maracujá,
//  Caju, Figo, Carambola, Framboesa, Jabuticaba

// ---------------------------------------------------
// João Victor da Silva Gomes

let eletronicos = ["Televisão", "Notebook", "Celular", "Carregador", "Processador", "Placa de video", "Memoria Ram", "Water cooler", "SSD", "HD", "Fan", "Lava Louças", "Geladeira", "Fogão", "Microondas", "Máquina de lavar", "Secadora", "Aspirador de pó", "Ar condicionado", "Ventilador"];

//A. Televisão, Water cooler, Lava Louças, Máquina de lavar, Ar condicionado, undefined
console.log("--------------------Resposta A-------------------");
console.log(eletronicos[0]);
console.log(eletronicos[7]);
console.log(eletronicos[11]);
console.log(eletronicos[15]);
console.log(eletronicos[18]);
console.log(eletronicos[20]);

//B. Ar condicionado, Ventilador
console.log("-------------------Resposta B--------------------");
console.log(eletronicos[eletronicos.length -2]);
console.log(eletronicos[eletronicos.length -1]);


//C.20
console.log("------------------Resposta C--------------------");
console.log(eletronicos.length);


//D.
console.log("------------------Resposta D--------------------");
eletronicos.push("Impressora");
console.log(eletronicos);

//E
console.log("------------------Resposta E--------------------");
for (let i = 0; i < eletronicos.length; i++) {
    console.log(eletronicos[i]);
}
