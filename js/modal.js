(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    // Додати атрибут data-modal-close на кнопку закриття
    closeModalBtn: document.querySelector('[data-modal-close]'),
    // Додати атрибут data-modal на бекдроп модалки
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
    refs.modal.classList.toggle('is-open');
  }
})();

// Мобільне меню
const burgerMenu = document.querySelector('.burger-menu');
const menuClose = document.querySelector('.menu-close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
const body = document.body;

burgerMenu.addEventListener('click', e => {
  e.preventDefault();
  mobileMenu.classList.add('is-open');
  body.style.overflow = 'hidden';
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  body.style.overflow = 'auto';
});

// Закриття меню при кліку на посилання
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    body.style.overflow = 'auto';
  });
});
