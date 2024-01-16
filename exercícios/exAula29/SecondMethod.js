const res = document.getElementById('res')
const data = new Date()
const hora = data.getHours()
const minutos = data.getMinutes()

res.innerHTML = `<h1>${data.toLocaleDateString('pt-BR', { dateStyle: 'full'})} ${hora}:${minutos}</h1>`