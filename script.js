const listaOl = document.getElementById('lista-tarefas');
const botaoInserir = document.getElementById('criar-tarefa');

function criarLi() {
    const elementoLi = document.createElement('li');
    elementoLi.innerText = document.getElementById('texto-tarefa').value;
    elementoLi.className = 'liDinamico'
    listaOl.appendChild(elementoLi);
    document.getElementById('texto-tarefa').value = ''
}

botaoInserir.addEventListener('click', criarLi);

function selecionaLi(alvo) {
    if (document.getElementsByClassName('liSelecionado')[0]){
        document.getElementsByClassName('liSelecionado')[0].className = 'liDinamico'
    } if (alvo.target.classList[0] === 'liDinamico') {
        alvo.target.className = 'liDinamico liSelecionado'
    }
}

listaOl.addEventListener('click', selecionaLi);
