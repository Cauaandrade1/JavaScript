function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '*') acumulador *= numero
    if (operador === '/') acumulador /= numero
    }

    return acumulador
}
console.log(conta('+', 1, 10, 20, 30))