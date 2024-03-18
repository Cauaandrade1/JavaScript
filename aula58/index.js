function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () =>{
        console.log(this.nome + ': Sou um metodo')
    }
}

const p1 = new Pessoa('Cauã', 'Andrade')
const p2 = new Pessoa('Rose', 'Andrade')

p1.metodo()