let concessionaria = [
  { nome: 'Mercedes-Benz AMG GT 63s', preco: 1200000, estoque: 3 },
  { nome: 'Porsche Cayenne Turbo GT', preco: 1500000, estoque: 2 },
  { nome: 'Volvo FH 540', preco: 950000, estoque: 5 },
  { nome: 'Scania R450', preco: 850000, estoque: 8 },
  { nome: 'Ferrari F8 Tributo', preco: 3500000, estoque: 1 },
  { nome: 'Lamborghini Urus', preco: 4000000, estoque: 2 },
  { nome: 'Ford Mustang Mach 1', preco: 550000, estoque: 4 },
  { nome: 'Chevrolet Camaro SS', preco: 520000, estoque: 6 },
  { nome: 'Dodge Challenger SRT', preco: 750000, estoque: 3 },
  { nome: 'Toyota Hilux GR-S', preco: 350000, estoque: 10 }
];
// A. Qual é o preço do segundo objeto?
console.log("--- Resposta A ---");
console.log("O preço do segundo carro é:", concessionaria[1].preco);
// B. Qual é o nome do terceiro objeto?
console.log("\n--- Resposta B ---");
console.log("O nome do terceiro carro é:", concessionaria[2].nome);
// C. Quantos itens existem no array?
console.log("\n--- Resposta C ---");
console.log("Existem", concessionaria.length, "itens no array.");
// D. Imprima o nome de todos os objetos.
console.log("\n--- Resposta D ---");
for (let i = 0; i < concessionaria.length; i++) {
  console.log(concessionaria[i].nome);
}
// E. Some o total de estoque de todos os objetos.
console.log("\n--- Resposta E ---");
let totalEstoque = 0;
for (let i = 0; i < concessionaria.length; i++) {
  totalEstoque += concessionaria[i].estoque;
}
console.log("O total de estoque é:", totalEstoque);
// F. Qual objeto possui maior estoque?
console.log("\n--- Resposta F ---");
let maiorEstoque = concessionaria[0]; // Assumimos que o primeiro é o maior inicialmente
for (let i = 1; i < concessionaria.length; i++) {
  if (concessionaria[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = concessionaria[i]; // Atualiza se encontrar um estoque maior
  }
}
console.log("O veículo com maior estoque é o", maiorEstoque.nome, "com", maiorEstoque.estoque, "unidades.");