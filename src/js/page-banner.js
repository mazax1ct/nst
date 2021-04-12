$(document).ready(function() {
  if($('.js-page-banner').length) {
    $('.js-page-banner').slick({
      arrows: false,
      mobileFirst: true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slick-arrow slick-prev" aria-label="Назад" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next" aria-label="Вперед" type="button"><svg class="slick-arrow__arrow" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: true,
            dots: false,
            appendArrows: $('.page-banner__slider-arrows')
          }
        }
      ]
    });
  }
});
