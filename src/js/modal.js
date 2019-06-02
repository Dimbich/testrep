$(document).ready(()=>{
  const button = $('.navbar__button');
  const modal = $('.modal');
  const close = $('.modal-dialog__close');
  button.on('click', ()=>{
    modal.addClass('modal_active');
  })

  close.on('click', ()=>{
    modal.removeClass('modal_active');
  })
})