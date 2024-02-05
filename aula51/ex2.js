function criaMulitplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const duplica = criaMulitplicador(2)
const triplica = criaMulitplicador(3)
const quadruplica = criaMulitplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadruplica(2))