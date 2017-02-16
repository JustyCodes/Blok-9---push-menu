var main = function () {
  $('.close').click(function () {
    $('.menu').animate({
      left: '-285px'
    }, 200);
    $('body').animate({
      left: '0px'
    }, 200);
      
    $('.close').addClass('icon-menu').removeClass('close');
  });
};
$(document).ready(main);