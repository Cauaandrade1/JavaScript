const nomeCompleto = 'Cauã de Andrade Campos'
const anoNasc = 2005
const peso = 70
const altura = 1.85
let imc = 70 / (1.85*2)
let agora = new Date()
let anoAtual = agora.getFullYear()
let idade = anoAtual - anoNasc

console.log(`${nomeCompleto} tem ${idade} anos, pesa ${peso}Kg. Tem altura de ${altura} e seu IMC é de ${imc}`)
console.log(`${nomeCompleto} nasceu em ${anoNasc}`)
