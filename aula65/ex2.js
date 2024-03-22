const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const nome_filtrado = pessoas.filter(obj => obj.nome.length >= 5)
console.log(nome_filtrado)

const pessoas_velhas = pessoas.filter(obj => obj.idade > 50)
console.log(pessoas_velhas)

const nome_termina_com_a = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))
console.log(nome_termina_com_a)