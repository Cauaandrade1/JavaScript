function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 

        sobrenome,

        get nomeComp(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeComp(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala: function(assunto = 'nada'){
            return `${this.nome} está falando sobre ${assunto}`
        },

        altura,

        peso,

        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Cauã', 'Andrade', 1.80, 80)
p1.nomeComp = 'Cauã Andrade Campos'
console.log(`${p1.nomeComp} tem o IMC: ${p1.imc}`)
console.log(p1.fala())