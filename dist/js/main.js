const navbarBtn = document.querySelector('.navbar__button');
const modalWindow = document.querySelector('.modal');

navbarBtn.addEventListener('click', () => {
  modalWindow.classList.add('modal_active');
  document.body.style.overflow = 'hidden';
})

modalWindow.addEventListener('click',({target}) => {
 if (target.classList.contains('modal') || target.classList.contains('modal-dialog__close')) {
  modalWindow.classList.remove('modal_active');
  document.body.style.overflow = 'visible';
 };
})