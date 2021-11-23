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

const botaoRemover = document.getElementById('remover-finalizados');

function removerRiscado() {
  const riscados = [];
  for (let i = 0; i < listaOl.children.length; i += 1) {
    if (listaOl.children[i].classList.contains('completed')) {
      riscados.push(listaOl.children[i]);
    }
  } for (let i = 0; i < riscados.length; i += 1) {
    listaOl.removeChild(riscados[i]);
  }
}

botaoRemover.addEventListener('click', removerRiscado);

const botaoSelecionado = document.getElementById('remover-selecionado');

function removerSelecionado() {
  const selecionado = document.getElementsByClassName('liSelecionado')[0];
  listaOl.removeChild(selecionado);
}

botaoSelecionado.addEventListener('click', removerSelecionado);

const botaoSalvar = document.getElementById('salvar-tarefas');

function salvar() {
  localStorage.clear();
  const objeto = {
    texto: [],
    classe: [],
  };
  for (let i = 0; i < listaOl.children.length; i += 1) {
    objeto.texto.push(listaOl.children[i].innerText);
    const arrayClasse = [...listaOl.children[i].classList];
    objeto.classe.push(arrayClasse.join(' '));
  } localStorage.setItem('listaSalva', JSON.stringify(objeto));
}

botaoSalvar.addEventListener('click', salvar);

function carregarSalvos() {
  if (localStorage.length > 0) {
    const objeto = JSON.parse(localStorage.getItem('listaSalva'));
    console.log(objeto.classe.length);
    for (let i = 0; i < objeto.classe.length; i += 1) {
      const elementoLi = document.createElement('li');
      elementoLi.innerText = objeto.texto[i];
      elementoLi.className = objeto.classe[i];
      listaOl.appendChild(elementoLi);
    }
  }
}

carregarSalvos();

const botaoCima = document.getElementById('mover-cima');
const botaoBaixo = document.getElementById('mover-baixo');

function moverCima() {
  for (let i = 1; i < listaOl.children.length; i += 1) {
    if (listaOl.children[i].classList.contains('liSelecionado')) {
      const selecionado = document.getElementsByClassName('liSelecionado')[0];
      const elementoLi = document.createElement('li');
      elementoLi.innerText = selecionado.innerText;
      elementoLi.className = selecionado.className;
      const liAnterior = listaOl.children[i - 1];
      listaOl.insertBefore(elementoLi, liAnterior);
      listaOl.removeChild(selecionado);
      break;
    }
  }
}


function moverBaixo() {
  for (let i = 0; i < listaOl.children.length - 1; i += 1) {
    if (listaOl.children[i].classList.contains('liSelecionado')) {
      const selecionado = document.getElementsByClassName('liSelecionado')[0];
      const elementoLi = document.createElement('li');
      elementoLi.innerText = selecionado.innerText;
      elementoLi.className = selecionado.className;
      const liPosterior = listaOl.children[i + 2];
      listaOl.insertBefore(elementoLi, liPosterior);
      listaOl.removeChild(selecionado);
      break;
    }
  }
}

botaoCima.addEventListener('click', moverCima);
botaoBaixo.addEventListener('click', moverBaixo);
