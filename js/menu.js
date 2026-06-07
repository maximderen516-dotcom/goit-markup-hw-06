const burgerBtn = document.querySelector('.burger-menu');
const closeBtn = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden'; // блокуємо скрол сторінки
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
});
