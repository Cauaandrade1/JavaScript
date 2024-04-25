function Produto(nome, preco, estoque){

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true, 
            configurable: false 
        },

        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: false 
        }
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave do objeto num log por exemplo
        value: estoque, // Mostra o valor da chave
        writable: false, // Pode alterar o valor da chave?
        configurable: false // Essa propriedade pode ser excluída ou alterada as suas config?
    })
    
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
