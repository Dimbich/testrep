$(document).ready(function() {
  const button = $('.navbar__button');
  const modal = $('.modal');
  const close = $('.modal-dialog__close');
  button.on('click', function() {
    modal.addClass('modal_active');
  })

  close.on('click', function() {
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
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $("#brif-form,  #offer_form").each(function(){
    $(this).validate({
      rules: {
        username: {
          required: true,
          rangelength: [2, 15]
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
        }
      },
      messages: {
        username: {
          required:'Заполните имя',
          rangelength: 'Введите от 2 до 15 символов'
        },
        email: {
            required: "Заполните e-mail",
            email: "Введите корректный email"
        },
        phone: {
          required: "Заполните телефон",
        }
      }    
    });
  });
  $(".phone").mask('+7 (999) 999-99-99');
})
