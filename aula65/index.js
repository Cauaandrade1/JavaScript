//Filter => Sempre retorna um array, com a mesma quantidade de elementos ou menos (pois está sendo filtrado)
//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numeros_filtrados = numeros.filter(valor => valor > 10)
console.log(numeros_filtrados)
