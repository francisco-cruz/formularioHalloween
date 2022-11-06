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
  const usuarioJson = JSON.stringify(usuario);
  const htmlUsuarioJson = `<p class="text-json">${usuarioJson}<p/>`

  document.getElementById("modal-conteudo").innerHTML += htmlUsuarioJson;
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

