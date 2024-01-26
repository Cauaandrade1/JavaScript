function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperava instância de data')
    }

    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
const hora = new Date('01-01-1970 12:54:21')
console.log(retornaHora(hora))
} catch(e){
    console.log('[ERRO] Não enviou a hora correta')
} finally{
    console.log('Tenha um bom dia!')
}
