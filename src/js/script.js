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

  const mapStart = $('.brif').offset().top;
  let isScroll;

  $(window).scroll(function() {
    if ($(document).scrollTop() >= mapStart && !isScroll) {
      $('.map').append(
        '<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afd9db69f1e5fb9c0514efe96c555feaa60743b05a1b308e566760a4d6302967a&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
      isScroll = true;
    }
  });
})
