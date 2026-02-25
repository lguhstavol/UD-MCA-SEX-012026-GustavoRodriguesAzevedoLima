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