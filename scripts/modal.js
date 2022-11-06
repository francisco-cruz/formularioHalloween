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
  <h4 class="">Eu, <b>${usuario.nome}</b> residente na cidade de <b>${usuario.cidade}</b> 
  Rua <b>${usuario.rua}</b> número <b>${usuario.numero}</b> vendo minh alma no valor de umacozinhae um pastel.<p/>`

  const htmlAssinatura = `
    <h5>Assinatura do contratante</h5>
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

