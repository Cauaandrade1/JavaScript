const pessoa1 = {
    nome: 'Cauã',
    sobrenome: 'Andrade',
    idade: 18,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} tem atualmente ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()

