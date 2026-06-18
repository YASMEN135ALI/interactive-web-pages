let cartCount = 0;
const cartCountSpan = document.getElementById('cartCount');
const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;
  });
});
