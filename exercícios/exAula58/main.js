function CriaCalculadora(){
        display = document.querySelector('.display')


        this.inicia = () => {
            this.cliqueBotoes()
            this.pressionaEnter()
        }

        this.pressionaEnter = () => {
            display.addEventListener('keyup', (e) => {
                if (e.keyCode === 13){
                    this.realizaConta()
                }
            })
        }

        this.cliqueBotoes = () => {
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
        }

        this.btnParaDisplay = (valor) =>{
            display.value += valor
        }
        this.clearParaDisplay =()=>{
            display.value = ' '
        }
        this.deleteOne =()=>{
            display.value = this.display.value.slice(0, -1)
        }
        this.realizaConta =()=>{
            let conta = display.value

            try{
                conta = eval(conta)

                if(!conta){
                    alert('Conta inválida!')
                    return
                }

                display.value = conta
                return
            } catch(e){
                alert('Conta inválida!')
                return
            }
        }
}

const calculadora = new CriaCalculadora()
calculadora.inicia()
