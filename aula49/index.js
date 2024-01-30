// First-class objects (Objetos de primeira classe)

// Declaração de função (Function hoisting)
falaOi()
function falaOi(){
    console.log('Oie')
}

// Function expression
const souUmDado = function(){
    console.log('Sou um dado')
}
souUmDado()

// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

// Dentro de objeto
const obj = {
    falar(){
        console.log('Estou falando...')
    }
}

obj.falar()