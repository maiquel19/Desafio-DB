  
let olympicsMedalTable = [
    { id: 1, country: "BRASIL", gold: 7, silver: 6, bronze: 6, continent: "AMERICA DO SUL" },
    { id: 2, country: "USA", gold: 46, silver: 37, bronze: 17, continent: "AMERICA DO NORTE" },
    { id: 3, country: "CHINA", gold: 26, silver: 18, bronze: 26, continent: "ASIA" },
    { id: 4, country: "RUSSIA", gold: 19, silver: 18, bronze: 19, continent: "EUROPA" },
    { id: 5, country: "REINO UNIDO", gold: 27, silver: 23, bronze: 17, continent: "EUROPA" },
    { id: 6, country: "ALEMANHA", gold: 17, silver: 10, bronze: 15, continent: "EUROPA" },
    { id: 7, country: "JAPÃO", gold: 12, silver: 8, bronze: 21, continent: "ASIA" },
    { id: 8, country: "ARGENTINA", gold: 3, silver: 1, bronze: 0, continent: "AMERICA DO SUL" },
    { id: 9, country: "ITALIA", gold: 8, silver: 12, bronze: 8, continent: "EUROPA" },
    { id: 10, country: "QUÊNIA", gold: 6, silver: 6, bronze: 1, continent: "AFRICA" },
];

Array.prototype.customFind = function (callback) {
    
    //Procurando apenas o país solicitado.
    const paisInformado = []
    for(var i=0; i < olympicsMedalTable.length; i++){
        if (callback(olympicsMedalTable[i]))
            paisInformado.push(olympicsMedalTable[i].country)

    }
    return paisInformado;
}

Array.prototype.customFilter = function (callback) {
     // Seleciona todas as medalhas por países.

     const paisInformado = [];
     var medalhas = 0;
     for(var i=0; i < olympicsMedalTable.length; i++){
         if (callback(olympicsMedalTable[i])){
             medalhas = olympicsMedalTable[i].gold + olympicsMedalTable[i].silver + olympicsMedalTable[i].bronze;
             paisInformado.push(medalhas+' '+olympicsMedalTable[i].country)
        }
     }
 
     return paisInformado;
 }
 
Array.prototype.customSome = function (callback) {
    // Implemente aqui seu algoritmo
    //Realiza a soma de todos os valores de todas as medalhas por países. 
    const paisInformado = [];
    var teste = 0;
    for(var i=0; i < olympicsMedalTable.length; i++){
        if (callback(olympicsMedalTable[i])){
        teste = teste + olympicsMedalTable[i].gold;
         paisInformado.push(teste);
        }
    }
    return paisInformado;
}


Array.prototype.customReduce = function (initialValue, valor) {
     // Implemente aqui seu algoritmo
     const paisInformado = [];        
     var numeros = 0;
     var isFalse;
     for (var i = 0; i < this.length; i++) {
         if(isNaN(this[i])){
            numeros = this[i].replace(/\D/gim, '');;
              if (valor < numeros){
                 //paisInformado.push(this[i]);
                 paisInformado.push(this[i])
              }
         }else{
            if (valor < this[i]){
                //paisInformado.push(this[i]);
                paisInformado.push(this[i])
             }else{
                paisInformado.push('Não possui')
             }
         }
     }
     return paisInformado;
   
}

Array.prototype.customMap = function (callback) {
    // Implemente aqui seu algoritmo
    const paisInformado = [];
    var medalhas = 0;
    for(var i=0; i < olympicsMedalTable.length; i++){
        if (callback(olympicsMedalTable[i])){
         medalhas = olympicsMedalTable[i].gold;
        paisInformado.push(medalhas+' '+olympicsMedalTable[i].country)
    }
    }

    return paisInformado;
}


/* DESAFIOS - CONCLUA AS FUNÇÕES customSome, customFind E UTILIZANDO TODAS AS FUNÇÕES 'CUSTOM' CONCLUA OS DESAFIOS ABAIXO: */


//-------------------------------------------------------------------------
//  1 - Crie um algoritmo que encontre o único pais do continente Africano
// 

const resultByCustomFind = olympicsMedalTable.customFind(i => i.continent === "AFRICA");

console.log(`Países africanos nas olimpiadas: ${resultByCustomFind}`);


//-------------------------------------------------------------------------
// 2 - Crie um algoritmo que retorne o total de medalhas por país
// 

const resultByCustomSome = olympicsMedalTable.customFilter(i => i.country != null)

    console.log(`Resultado Total de Medalhas por país: ${resultByCustomSome}`);

//-------------------------------------------------------------------------
//   3 - Crie um algoritmo para encontrar os países que conquistaram mais que 10 medalhas de ouro
// 

const resultByCustomMapReduce = olympicsMedalTable.customMap(i => i.country != null)
        .customReduce(total => total.gold, 10);

    console.log(`Países com mais de 10 medalhas de ouro: ${resultByCustomMapReduce}`);

//-------------------------------------------------------------------------
// 4 - Crie um algoritmo para encontrar os países que conquistaram no minímo 30 medalhas (Ouro, Prata e Bronze)
// 

const resultByCustomFilterReduce = olympicsMedalTable.customFilter(i => i.country != null)
    .customReduce(total => total.gold, 30);

    console.log(`Países com mais de 30 medalhas no geral: ${resultByCustomFilterReduce}`);

//-------------------------------------------------------------------------
// 5 - Crie um algoritmo para verificar se o continente América do Sul conquistou pelo menos 20 medalhas de ouro
//

const resultByCustomSomeReduce = olympicsMedalTable.customSome(i => i.continent === "AMERICA DO SUL")
        .customReduce(total => total.gold, 30);

    console.log(`Continente america do sul possui mais de 20 medalhas de ouro: ${resultByCustomSomeReduce}`);



