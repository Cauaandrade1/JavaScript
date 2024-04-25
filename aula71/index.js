function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    this.estoque = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave do objeto num log por exemplo
        value: estoque, // Mostra o valor da chave
        writable: false, // Pode alterar o valor da chave?
        configurable: false // Essa propriedade pode ser excluída ou alterada as suas config?
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
