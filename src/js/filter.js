var disableBodyScroll = bodyScrollLock.disableBodyScroll;
var enableBodyScroll = bodyScrollLock.enableBodyScroll;
var filterDropdown = document.querySelector('.filter__body');

$(document).on('click', '.js-filter-opener', function() {
  $('.filter__body').addClass('is-open');
  disableBodyScroll(filterDropdown);
  return false;
});

$(document).on('click', '.js-filter-closer', function() {
  $('.filter__body').removeClass('is-open');
  enableBodyScroll(filterDropdown);
  return false;
});
