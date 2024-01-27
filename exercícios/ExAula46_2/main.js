function meuEscopo(){

const input_tarefa = document.querySelector('.input-tarefa')
const addTarefa = document.querySelector('.add-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi(){
    const li = document.createElement('li')
    return li
}

function criaTarefa(TextoInput){
    const li = criaLi()
    li.innerHTML = TextoInput
    tarefas.appendChild(li)
    criaBotaoApagar(li)
    salvaTarefas()
}

function criaBotaoApagar(li){
    li.innerText += '       '
    const botao = document.createElement('button')
    botao.innerText = 'Apagar'
    botao.setAttribute('class', 'apagar')
    li.appendChild(botao)
}

input_tarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if (!input_tarefa.value) return
        criaTarefa(input_tarefa.value)
        LimpaInput()
    }
    console.log(e)
})

addTarefa.addEventListener('click', function(){
    if (!input_tarefa.value) return
    criaTarefa(input_tarefa.value)
    LimpaInput()
})

function LimpaInput(){
    input_tarefa.value = ''
    input_tarefa.focus()
}

document.addEventListener('click', function(e){
    el = e.target
    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        salvaTarefas()  //Serve para apagar a tarefa e salvar
    }
})

function salvaTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const ListaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        ListaDeTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(ListaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function add_tarefas_salvas(){
    const tarefas = localStorage.getItem('tarefas')
    const ListaDeTarefas = JSON.parse(tarefas)

    for (let tarefa of ListaDeTarefas){
        criaTarefa(tarefa)
    }
}
add_tarefas_salvas()
}
meuEscopo()