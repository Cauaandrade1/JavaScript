const pessoa1 = new Object()
pessoa1.nome = 'Cauã'
pessoa1.sobrenome = 'Andrade'
pessoa1.idade = 19
pessoa1.fala = function(){
    return `Eu sou o ${this.nome} de ${this.sobrenome} tenho ${this.idade} anos e nasci em`
}
pessoa1.getDataDeNascimento = function(){
    const ano_atual = new Date()
    return ano_atual.getFullYear() - this.idade
}

console.log(pessoa1.fala(), pessoa1.getDataDeNascimento())
