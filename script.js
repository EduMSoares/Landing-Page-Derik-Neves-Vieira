
//animação foto perfil derik

const fotoPerfil = document.querySelector('img.primario-img')

fotoPerfil.addEventListener('mouseenter', function () {

  this.style.width = '430px'
  
})
fotoPerfil.addEventListener('mouseout', function () {

  this.style.width = '362px'
  
})