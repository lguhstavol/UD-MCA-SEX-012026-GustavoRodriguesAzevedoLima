let produtos = [
  { nome: 'Camiseta', preco: 59.90, estoque: 50 },
  { nome: 'Calça', preco: 120.00, estoque: 30 },
  { nome: 'Tênis', preco: 250.00, estoque: 20 },
  { nome: 'Boné', preco: 45.00, estoque: 60 },
  { nome: 'Jaqueta', preco: 300.00, estoque: 15 },
  { nome: 'Blusa', preco: 80.00, estoque: 40 },
  { nome: 'Shorts', preco: 70.00, estoque: 35 },
  { nome: 'Vestido', preco: 150.00, estoque: 25 },
  { nome: 'Saia', preco: 90.00, estoque: 45 },
  { nome: 'Meia', preco: 20.00, estoque: 100 }
];


//A. Qual é o preço do segundo objeto?
console.log(produtos[1].preco); //120

//B. Qual é o nome do terceiro objeto?
console.log(produtos[2].nome); //Tênis

//C. Quantos itens existem no array?
console.log(produtos.length); //10 

//D. Imprima o nome de todos os objetos.
for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome);
} 
  //Camiseta, Calça, Tênis
  //Boné, Jaqueta, Blusa, Shorts,
  //Vestido, Saia, Meia

//E. Some o total de estoque de todos os objetos.
let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}

console.log("Total em estoque:", totalEstoque);

  //Total em estoque: 420


//F. Qual objeto possui maior estoque?
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}

console.log("Produto com maior estoque:", maiorEstoque);

  //Produto com maior estoque: { nome: 'Meia', preco: 20, estoque: 100 }