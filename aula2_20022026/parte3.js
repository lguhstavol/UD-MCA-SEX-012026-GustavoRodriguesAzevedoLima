// Gustavo Rodrigues Azevedo Lima

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

// ------------------------------------------------------------
// Natalia da Silva Melo Frreira

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

  
// ------------------------------------------------------------
// João Victor da Silva Gomes

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
console.log("------------------Resposta F-----------------------");
let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}
console.log(maiorEstoque.nome);
