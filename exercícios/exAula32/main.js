function meuEscopo(){

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'} 
]

    const container = document.getElementById('conteiner')
    const res = document.getElementById('res')

    for (let i = 0; i < elementos.length; i++){
        let { tag, texto} = elementos[i]
        let TAGS = document.createElement(tag)
        TAGS.innerHTML += texto
        res.appendChild(TAGS)
    }
    container.appendChild(res)
}

meuEscopo()