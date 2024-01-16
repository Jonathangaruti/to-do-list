const button = document.querySelector('.button-add');
const input = document.querySelector('.input-task');
const listaUl = document.querySelector('.list-task');

let listaItens = []

function adicionarTarefa(){
  listaItens.push({
    tarefa: input.value,
    concluida: false,
  })

  input.value = ''

  mostrarTarefas()
}

function mostrarTarefas(){

  let novaLi = ''

  listaItens.forEach((i, index) => {
    novaLi = novaLi + `
    <li class="task ${i.concluida && 'feito'}">
      <img src="img/checked.png" alt="adiconar-tarefa" onclick="concluirTarefa(${index})">
      <p>${i.tarefa}</p>
      <img src="img/trash.png" alt="remover-tarefa" onclick="deletarItem(${index})">
    </li>
    
    `
  })

  listaUl.innerHTML = novaLi

  localStorage.setItem('lista', JSON.stringify(listaItens))
}

function concluirTarefa(index) {
  listaItens[index].concluida = !listaItens[index].concluida
  mostrarTarefas()
}

function deletarItem(index) {
  listaItens.splice(index, 1)
  mostrarTarefas()
}

function recarregarItens(){
  const itensLocalStorage = localStorage.getItem('lista')

  if(itensLocalStorage){
  listaItens = JSON.parse(itensLocalStorage)
  }
  mostrarTarefas()
}

recarregarItens()
button.addEventListener('click', adicionarTarefa)