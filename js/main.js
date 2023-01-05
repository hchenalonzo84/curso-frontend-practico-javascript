const menuemail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuemail.addEventListener('click', function() {
    console.log('recibiendo click');
  desktopMenu.classList.toggle('inactive');
});

menuBurger.addEventListener('click', function () {
  mobileMenu.classList.toggle('inactive');
});

console.log('js funcionando');