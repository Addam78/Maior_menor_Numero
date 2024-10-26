console.log('Maior e menor numero de um array')
console.log('----------------------------')

let numeros = [90,10,81,150,200,80]

let comparar = 0

for (n of numeros){
    if(comparar <  n){
        comparar = n   
    }
}

console.log(`O maior numero é ${comparar}`)
console.log('----------------------------')
//FOI NEXESSARIO ENCONTRAR O MAIOR NUMERO PARA QUE O MESMO FOSSE UTILZIADO DE COMPARADOR

for (n of numeros){
    if(comparar >  n){
        comparar = n   
    }
}

console.log(`Menor numero do array é ${comparar}`)