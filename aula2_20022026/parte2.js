// Gustavo Rodrigues Azevedo Lima

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

// ------------------------------------------------------------
// Natalia da Silva Melo Frreira

let produto = {
  nome: 'Camiseta',
  cor: 'Preta',
  preco: 59.90,
  estoque: 50
};

//A. Como acessar o nome do objeto?
console.log(produto.nome); //Camiseta

//B. Como acessar o preço usando colchetes?
console.log(produto['preco']); //59.9

//C. Atualize o estoque para 80.
produto.estoque = 80; //estoque: 80

//D. Imprima todas as propriedades no console.
for (let chave in produto) {
  console.log(chave + ": " + produto[chave]);
}
//Camiseta
//59.9
//nome: Camiseta
//cor: Preta
//preco: 59.9
//estoque: 80

// ------------------------------------------------------------
// João Victor da Silva Gomes

let celular = {
    marca:'Apple',
    cor:'Preto',
    preco:`R$ 5.500,00`,
    estoque:`15`,
}

//A. 
console.log("--------------------Resposta A-------------------");
console.log(celular.marca);
//B. 
console.log("-------------------Resposta B--------------------");
console.log(celular["preco"]);

//C
console.log("------------------Resposta C--------------------");
celular.estoque = 80;
console.log(celular.estoque);
//D
console.log("------------------Resposta D---------------------");
for (let chave in celular) {
  console.log(chave + ": " + celular[chave]);
}