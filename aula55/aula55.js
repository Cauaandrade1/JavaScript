(function(idade){
    const sobrenome = 'Andrade'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    console.log(criaNome('Cauã'))
    console.log(`Tem atualmente ${idade} anos`)
})(18)