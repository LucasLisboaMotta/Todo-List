const listaOl = document.getElementById('lista-tarefas');
const botaoInserir = document.getElementById('criar-tarefa');

function criarLi() {
    const elementoLi = document.createElement('li');
    elementoLi.innerText = document.getElementById('texto-tarefa').value;
    listaOl.appendChild(elementoLi);
    document.getElementById('texto-tarefa').value = ''
}

botaoInserir.addEventListener('click', criarLi);