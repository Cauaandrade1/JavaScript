function fala(começo){
    return function(resto){
        return começo + ' ' + resto
    }
}

const ola = fala('Olá')
const frase = ola('Mundo!')
console.log(frase)
