const div = document.querySelector('res')
const paragrafos = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body)
const backgroundBody = estilosBody.backgroundColor

for (let p of paragrafos){
    p.style.backgroundColor = backgroundBody
    p.style.color = ('white')
}

console.log(paragrafos)
