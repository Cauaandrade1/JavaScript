function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números')
    }

    return x + y
}
try{
    console.log(soma(1,5))
    console.log(soma('1', 3))
} catch(error){
    console.log('Alguma coisa mais amigável para o nosso usuário')
}

