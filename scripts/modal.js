const closeModal = document.getElementById('close-modal');
const modal = document.getElementById('modal-background');
const bodyHtml = document.getElementsByTagName('html');

// Abrir modal
export function openModal(usuario) {
  renderUsuarioOnModal(usuario)
  showModal(modal)

  closeModal.addEventListener('click', () => {
    removeModal(modal)
    location.reload();
  })
}

// Renderizar o JSON do usuario no modal
function renderUsuarioOnModal(usuario) {
  const htmlUsuarioJson = `
  <h3 class="px-5 mt-3 mb-2">Eu, <b>${usuario.nome}</b>, de <b>${usuario.idade}</b> Anos, residindo em <b>${usuario.cidade}</b> com CEP <b>${usuario.cep}</b>, no bairro <b><${usuario.bairro}</b>, <b>${usuario.rua}</b> e número <b>n°${usuario.numero}</b>,
  Rua <b>${usuario.rua}</b> número <b>${usuario.numero}</b> vendo minha alma no valor de um Pastelzinho com Coca;<p/></h3>
  <h3 class="px-5 mt-3">Parágrafo único: os Hobbies <b>${usuario.hobbies+", "}</b> que eram atribuídos ao <b>Cliente</b> passam a ser do <b>Fornecedor</b>;</h3>
  <h3 class="px-5 mt-3">A alma do <b>Cliente</b> passa a ser do <b>Fornecedor</b> devido a falta de atenção do mesmo em vender sua alma de acordo com nossos termos assinados pelo mesmo;</h3>`

  const htmlAssinatura = `
  <h5 class="mt-5">Assinatura do contratante</h5>
  <p>${usuario.nome}</p>
  `
  document.getElementById("modal-conteudo").innerHTML += htmlUsuarioJson;
  document.getElementById("modal-assinatura").innerHTML += htmlAssinatura;
}

// Mostrar modal na tela
function showModal(modal) {
  modal.style.display = 'block'
  bodyHtml[0].style.overflow = 'hidden';
}

// Remover modal da tela
function removeModal(modal) {
  modal.style.display = 'none'
  bodyHtml[0].style.overflow = 'scroll';
}


export function removeContent (content) {
  content.style.display = 'none';
}

