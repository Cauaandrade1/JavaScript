function relogio(){

const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer

function mostraHora(segundos){
const contador = new Date(segundos * 1000)

    return contador.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    })
}

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = mostraHora(segundos)
    }, 1000)
}

document.addEventListener('click', function(e){
    const el = e.target

    if (el.classList.contains('iniciar') ){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio()
    }

    if (el.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer)
    }

    if (el.classList.contains('zerar')){
        segundos = 0
        clearInterval(timer)
        relogio.innerHTML = mostraHora(segundos)
    }
})
}
relogio()





