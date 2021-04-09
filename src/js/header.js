var disableBodyScroll = bodyScrollLock.disableBodyScroll;
var enableBodyScroll = bodyScrollLock.enableBodyScroll;
var headerDropdown = document.querySelector('.header__menu-block');

//вычисляем ширину скроллбара
function scrollBarWidth() {
  var scrollBarWidth = window.innerWidth-$(document).width();

  if(scrollBarWidth > 0) {
    $('body').addClass('compensate-for-scrollbar');
    $('head').append('<style id="menu-open" type="text/css">.compensate-for-scrollbar{padding-right:'+scrollBarWidth+"px;}</style>")
  }
}

$(document).ready(function() {

});

//главное меню
$(document).on('click', '.js-menu-toggler', function () {
  $(this).toggleClass('is-active');

  if($(this).hasClass('is-active')) {
    disableBodyScroll(headerDropdown);
    $('.header__menu-block').addClass('is-open');
  } else {
    enableBodyScroll(headerDropdown);
    $('.header__menu-block').removeClass('is-open');
  }
  return false;
});
