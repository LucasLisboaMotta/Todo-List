const listaOl = document.getElementById('lista-tarefas');
const botaoInserir = document.getElementById('criar-tarefa');

function criarLi() {
  const elementoLi = document.createElement('li');
  elementoLi.innerText = document.getElementById('texto-tarefa').value;
  elementoLi.className = 'liDinamico';
  listaOl.appendChild(elementoLi);
  document.getElementById('texto-tarefa').value = '';
}

botaoInserir.addEventListener('click', criarLi);

function selecionaLi(alvo) {
  if (document.getElementsByClassName('liSelecionado')[0]) {
    document.getElementsByClassName('liSelecionado')[0].classList.remove('liSelecionado');
  } if (alvo.target.classList[0] === 'liDinamico') {
    const selecionaAlvo = alvo.target;
    selecionaAlvo.classList.add('liSelecionado');
  }
}

listaOl.addEventListener('click', selecionaLi);

function cortaLi(alvo) {
  const selecionado = alvo.target;
  const selecionadoArray = selecionado.classList;
  if (selecionadoArray[0] === 'liDinamico' && selecionadoArray.contains('completed')) {
    selecionado.classList.remove('completed');
  } else if (selecionadoArray[0] === 'liDinamico') {
    selecionado.classList.add('completed');
  }
}

listaOl.addEventListener('dblclick', cortaLi);

const botaoApagar = document.getElementById('apaga-tudo');

function removerTudo() {
  const numeroLi = listaOl.children.length;
  for (let i = 0; i < numeroLi; i += 1) {
    const filhoApagado = listaOl.children[0];
    listaOl.removeChild(filhoApagado);
  }
}

botaoApagar.addEventListener('click', removerTudo);
