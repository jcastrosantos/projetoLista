let inputTarefa = document.getElementById('inputTarefa')
let btnAdd = document.getElementById('addTarefa')
let minhasTarefas = document.getElementById('tarefas')

let tarefas = JSON.parse(localStorage.getItem('list-tarefas')) || []
console.log(tarefas)


btnAdd.addEventListener('click', function(){
    if(inputTarefa.value){
        tarefas.push(inputTarefa.value)
        inputTarefa.value = ""
        renderList()
    }
    salvarTarefa()
})

function removerTarefa(position){
    tarefas.splice(position, 1)
    renderList()
    localStorage.removeItem('tarefa')
    salvarTarefa()
}



function renderList () {
    minhasTarefas.innerHTML = ''
    
    tarefas.forEach((element, index) => {
        minhasTarefas.innerHTML += `<li class="li l1"  id="nota notas"><input type="checkbox"><p>${element}</p><button id="apagar"  onclick="removerTarefa(${index})"><span class="material-icons-outlined">
        delete
        </span>
        </button></li>`
    })
    
    
}



function salvarTarefa(){
    localStorage.setItem('list-tarefas', JSON.stringify(tarefas))
}

renderList ()
