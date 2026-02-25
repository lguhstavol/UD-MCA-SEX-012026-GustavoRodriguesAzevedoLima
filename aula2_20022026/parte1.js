let eletronicos = ["Televisão", "Notebook", "Celular", "Carregador", "Processador", "Placa de video", "Memoria Ram", "Water cooler", "SSD", "HD", "Fan", "Lava Louças", "Geladeira", "Fogão", "Microondas", "Máquina de lavar", "Secadora", "Aspirador de pó", "Ar condicionado", "Ventilador"];

//A. Televisão, Water cooler, Lava Louças, Máquina de lavar, Ar condicionado, undefined
console.log("--------------------Resposta A-------------------");
console.log(eletronicos[0]);
console.log(eletronicos[7]);
console.log(eletronicos[11]);
console.log(eletronicos[15]);
console.log(eletronicos[18]);
console.log(eletronicos[20]);

//B. Ar condicionado, Ventilador
console.log("-------------------Resposta B--------------------");
console.log(eletronicos[eletronicos.length -2]);
console.log(eletronicos[eletronicos.length -1]);


//C.20
console.log("------------------Resposta C--------------------");
console.log(eletronicos.length);


//D.
console.log("------------------Resposta D--------------------");
eletronicos.push("Impressora");
console.log(eletronicos);

//E
console.log("------------------Resposta E--------------------");
for (let i = 0; i < eletronicos.length; i++) {
    console.log(eletronicos[i]);
}

