function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala(assunto){
            return `${this.nome} está falando ${assunto}`
        },
        altura: altura,
        peso: peso,

        get imc(){
            const indice = this.peso / (altura**2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Cauã', 'Andrade', 1.80, 80)
console.log(p1.imc)
p1.nomeCompleto = 'João de Andrade Campos'
console.log(p1.nomeCompleto)