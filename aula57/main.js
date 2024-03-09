function criaCalculadora(){
    return {
        display: document.querySelector('.display'),


        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) => {
                const el = e.target

                // Para pegar um número
                if (el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }
                // Para dar clear no display
                if (el.classList.contains('btn-clear')){
                    this.clearParaDisplay()
                }
                // Para apagar 1 caracter
                if (el.classList.contains('btn-del')){
                    this.deleteOne()
                }
                if (el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(valor){
            this.display.value += valor
        },
        clearParaDisplay(){
            this.display.value = ' '
        },
        deleteOne(){
            this.display.value = this.display.value.slice(0, -1)
        },
        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida!')
                    return
                }

                this.display.value = conta
                return
            } catch(e){
                alert('Conta inválida!')
                return
            }

        }
    }
}

const calculadora = criaCalculadora()
calculadora.inicia()
