const data = new Date()
console.log('dia', data.getDate())
console.log('Mês', data.getMonth() + 1) //Mês começa do zero. Por isso adiciona mais 1 para ficar igual ao calendário normal
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minutos', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('Dia da semana', data.getDay()) // 6 = Sabádo ; 0 = Domingo 
console.log(data.toString())