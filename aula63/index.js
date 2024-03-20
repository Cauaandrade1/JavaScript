//               -4      -3      -2      -1
//                0       1       2       3
const nomes = ['Cauã', 'André', 'João', 'Maria']

//nomes.splice(índice atual, delete, add_elem1, add_elem2, add_eleme2)

//pop
//const removidos = nomes.splice(-1, 1)

//shift
//const removidos = nomes.splice(0, 1)

//push
//nomes.splice(nomes.length, 1, 'Luiz')

//unshift
nomes.splice(0, 0, 'Luiz', 'Otávio')
console.log(nomes)
