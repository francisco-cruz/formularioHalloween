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
  <h3 class="px-5 mt-4 mb-2 text-center">Eu, <b>${usuario.nome}</b>, de <b>${usuario.idade+" Anos"}</b> , residindo em <b>${usuario.cidade}</b> com Cep <b>${usuario.cep}</b>, no Bairro <b>${usuario.bairro}</b>, na Rua <b>${usuario.rua}</b> e número <b>n°${usuario.numero}</b>,
  </b> vendo minha alma no valor de um Pastelzinho com Coca;<p/></h3>
  <h3 class="px-5 mt-3 text-center">Parágrafo único: os Hobbies <b>${usuario.hobbies.join(", ")}</b> que eram atribuídos ao <b>Cliente</b> passam a ser do <b>Fornecedor</b>;</h3>
  <h3 class="px-5 mt-3 text-center">A alma do <b>Cliente</b> passa a ser do <b>Fornecedor</b> devido a falta de atenção ao preencher esse formulário;</h3>`

  const htmlAssinatura = `
  <div class="text-center">
  <h5 class="mt-5">Assinatura do contratado</h5>
  <p>${usuario.nome}</p>
  </div>
  <div class="text-center">
  <h5 class="mt-5">Assinatura do contratante</h5>
  <p>Francisco</p>
  </div>
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

