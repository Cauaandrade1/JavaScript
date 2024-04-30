function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco
    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave do objeto num log por exemplo
        configurable: true, // Essa propriedade pode ser excluída ou alterada as suas config?
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== "number"){
                throw new TypeError('Bad value')
                return
            }

            estoquePrivado = valor
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 3
console.log(p1.estoque)
