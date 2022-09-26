const menuemail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuemail.addEventListener('click', function() {
    console.log('recibiendo click');
  desktopMenu.classList.toggle('inactive');
});

console.log('js funcionando');