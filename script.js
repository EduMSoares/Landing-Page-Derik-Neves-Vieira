// COPIAR NUMERO DE TELEFONE
const txtCopy = document.querySelector('input#copytxt1');
const txtCopy2 = document.querySelector('input#copytxt2');

txtCopy.addEventListener('click', (e) => {
  e.preventDefault();
  
  navigator.clipboard.writeText(txtCopy.value);
  
  alert('Texto copiado para área de transferência! Ctrl+V em algum local para colar');
});

txtCopy2.addEventListener('click', (e) => {
  e.preventDefault();
  
  navigator.clipboard.writeText(txtCopy2.value);
  
  alert('Texto copiado para área de transferência! Ctrl+V em algum local para colar');
});

//animação foto perfil derik

const fotoPerfil = document.querySelector('img.primario-img')

fotoPerfil.addEventListener('mouseenter', function () {

  this.style.width = '430px'
  
})
fotoPerfil.addEventListener('mouseout', function () {

  this.style.width = '362px'
  
})