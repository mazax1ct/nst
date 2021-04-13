$(document).on('click', '.js-tabs', function () {
  $('.js-tabs').removeClass('is-active');
  $(this).addClass('is-active');
  $('.tabs[data-tabs="'+$(this).closest('.tabs-nav').attr('data-tabs')+'"] .tab').removeClass('is-active');
  $('.tabs[data-tabs="'+$(this).closest('.tabs-nav').attr('data-tabs')+'"] .tab[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
  return false;
});
