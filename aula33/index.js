const pessoa = {
    nome: 'Cauã',
    sobrenome: 'Andrade',
    idade: 18,
    endereco: {
        rua: 'Rua Luzia Machado Saldão',
        numero: 14,
    }
}

const { nome = '', sobrenome, ...resto } = pessoa
console.log(nome, sobrenome)

//const { endereco: {rua, numero} } = pessoa
//console.log(`Mora na ${rua}, ${numero}`)

console.log(resto)