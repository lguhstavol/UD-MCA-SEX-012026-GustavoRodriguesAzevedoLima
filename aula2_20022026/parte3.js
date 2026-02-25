let produtos = [
  { nome: 'Notebook', preco: 3500, estoque: 8 },
  { nome: 'Mouse', preco: 120, estoque: 25 },
  { nome: 'Teclado', preco: 250, estoque: 15 },
  { nome: 'Monitor', preco: 900, estoque: 12 },
  { nome: 'Celular', preco: 2200, estoque: 5 },
  { nome: 'Headset', preco: 300, estoque: 18 },
  { nome: 'Impressora', preco: 750, estoque: 4 },
  { nome: 'Webcam', preco: 180, estoque: 20 },
  { nome: 'Cadeira Gamer', preco: 1100, estoque: 6 },
  { nome: 'HD', preco: 400, estoque: 10 }
];

//A.
console.log("--------------------Resposta A------------------");
console.log(produtos[1].preco);
//B.
console.log("-------------------Resposta B-------------------");
console.log(produtos[2].nome);
//C.
console.log("------------------Resposta C--------------------");
console.log(produtos.length);
//D.
console.log("------------------Resposta D--------------------");
for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i].nome);
}
//E.
console.log("------------------Resposta E--------------------");
let totalEstoque = 0;

for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}

console.log(totalEstoque);

//F.
console.log("------------------Resposta F--------------------");
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}
console.log(maiorEstoque.nome);
