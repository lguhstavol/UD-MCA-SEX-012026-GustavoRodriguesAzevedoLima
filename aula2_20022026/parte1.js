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