const ePaisagem = (largura, altura) => largura >= altura

const paisagem = ePaisagem(1200, 920)
if (paisagem){
    console.log('É uma imagem paisagem')
} else{
    console.log('Não é uma paisagem')
}