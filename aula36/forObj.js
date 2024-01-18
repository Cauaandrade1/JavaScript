const pessoa = {
    nome: 'Cauã',
    sobrenome: 'Andrade',
    idade: 18
}

for (let chave in pessoa){
    console.log(chave, ':',pessoa[chave])
}