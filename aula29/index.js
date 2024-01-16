function PegaDiaSem(diaSem){
    let DiaSemana
    switch (diaSem){
        case 0:
            DiaSemana = 'Domingo'
            return DiaSemana
        case 1:
            DiaSemana = 'Segunda'
            return DiaSemana
        case 2:
            DiaSemana = 'Terça'
            return DiaSemana
        case 3:
            DiaSemana = 'Quarta'
            return DiaSemana
        case 4:
            DiaSemana = 'Quinta'
            return DiaSemana
        case 5:
            DiaSemana = 'Sexta'
            return DiaSemana
        case 6:
            DiaSemana = 'Sábado'
            return DiaSemana
        default:
            DiaSemana = 'Dia está errado'
            return DiaSemana
    }
}

const data = new Date('2005-06-12')
const diaSem = data.getDay()
let DiaSemana = PegaDiaSem(diaSem)

console.log(DiaSemana)