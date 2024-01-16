function meuEscopo(){
function PegaDiaSem(diaSem){
        let diasSem = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira','Sábado']
    return diasSem[diaSem]
}

function PegaMes(Mes){
    let MesTxt
    let meses = ['Janeiro','Fevereiro', 'Março', 'Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
    return meses[Mes]
}


const res = document.getElementById('res')
const data = new Date()
const diaSem = data.getDay()
const DiaMes = data.getDate()
const Mes = data.getMonth()
const Ano = data.getFullYear()
const hora = data.getHours()
const minutos = data.getMinutes()
let DiaSemana = PegaDiaSem(diaSem)
let MesTxt = PegaMes(Mes)


res.innerHTML = `<h1>${DiaSemana}, ${DiaMes} de ${MesTxt} de ${Ano} ${hora}:${minutos}</h1>`

}
meuEscopo()