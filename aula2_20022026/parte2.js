let celular = {
    marca:'Apple',
    cor:'Preto',
    preco:`R$ 5.500,00`,
    estoque:`15`,
}

//A. 
console.log("--------------------Resposta A------------------");
console.log(celular.marca);
//B. 
console.log("-------------------Resposta B-------------------");
console.log(celular["preco"]);

//C
console.log("------------------Resposta C--------------------");
celular.estoque = 80;
console.log(celular.estoque);
//D
console.log("------------------Resposta D--------------------");
for (let chave in celular) {
  console.log(chave + ": " + celular[chave]);
}