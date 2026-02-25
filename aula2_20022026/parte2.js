let meuVeiculo = {
  nome: 'Porsche Cayenne Turbo GT',
  cor: 'Chumbo',
  preco: 1500000.00,
  estoque: 1
};
// A. Como acessar o nome do objeto?
console.log("--- Resposta A ---");
console.log(meuVeiculo.nome);
// B. Como acessar o preço usando colchetes?
console.log("\n--- Resposta B ---");
console.log(meuVeiculo['preco']);
// C. Atualize o estoque para 80.
console.log("\n--- Resposta C ---");
meuVeiculo.estoque = 80; 
console.log("O estoque foi atualizado para:", meuVeiculo.estoque);
// D. Imprima todas as propriedades no console
console.log("\n--- Resposta D ---");
console.log(meuVeiculo);