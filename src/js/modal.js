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

  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})
