function meuEscopo(){
    const form = document.querySelector('.form')

    const pessoas = []

    function recebeEventoForm (evento){

        evento.preventDefault()

        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')
        const res = document.querySelector('.res')

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        res.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo()