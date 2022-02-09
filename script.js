// COPIAR NUMERO DE TELEFONE
const txtCopy = document.querySelector('input#copytxt');
txtCopy.addEventListener('click', (e) => {
  e.preventDefault();
  
  navigator.clipboard.writeText(txtCopy.value);
  
  alert('Texto copiado para área de transferência! Ctrl+V em algum local para colar');
});