const menuemail= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const detalleProducto = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuemail.addEventListener('click', function() {
    console.log('recibiendo click');
    const isDetalleProductoClose = detalleProducto.classList.contains('inactive');
  
    if (! isDetalleProductoClose) {
      detalleProducto.classList.add('inactive')
    }
  desktopMenu.classList.toggle('inactive');
});

menuBurger.addEventListener('click', function () {
  const isDetalleProductoClose = detalleProducto.classList.contains('inactive');
  
  if (!isDetalleProductoClose) {
    detalleProducto.classList.add('inactive');
  }
  
  mobileMenu.classList.toggle('inactive');
});


menuCarritoIcon.addEventListener('click', function () {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive');
  }
  detalleProducto.classList.toggle('inactive');
});

//  seccion de los productos

const productList = [];
productList.push({
  name: 'Zapatos ',
  price: 350,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike',
  price: 120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 200,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {  
for (product of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');



  const productInfoDiv = document.createElement('div');

  const productPrice= document.createElement('p');
  productPrice.innerText= '$'+ product.price;

  const productName = document.createElement('p');
  productName.innerText= product.name;

  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfofigure = document.createElement('figure');
  const productImgCard= document.createElement('img');
  productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');

  productInfofigure.appendChild(productImgCard);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfofigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);
  cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);