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