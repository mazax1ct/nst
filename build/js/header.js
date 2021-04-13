var disableBodyScroll = bodyScrollLock.disableBodyScroll;
var enableBodyScroll = bodyScrollLock.enableBodyScroll;
var headerDropdown = document.querySelector('.header__menu-block');

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
