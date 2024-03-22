
//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const Nome_da_pessoa = pessoas.map((valor) => {
    return valor.nome
})
console.log(Nome_da_pessoa)



const Remove_nome = pessoas.map(function(obj){
    return {idade: obj.idade}
})
console.log(Remove_nome)


const Chave_ID = pessoas.map((obj, indice) => {
    const NewOBJ = {...obj}
    NewOBJ.id = indice
    return  NewOBJ
})
console.log(Chave_ID)