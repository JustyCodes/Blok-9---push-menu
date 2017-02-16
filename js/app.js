var main = function () {
  $('.icon-menu').click(function () {
    var clicked = $(this).data('clicked');
    $(this).data('clicked', !clicked);
    
    
    if (!clicked) {
      
      $('.menu').animate({
        left: '0px'
      }, 200);
      
      $('body').animate({
        left: '285px'
      }, 200);
    } else {
      $('.menu').animate({
        left: '-285px'
      }, 200);
      $('body').animate({
        left: '0px'
      }, 200);
      
  
    }
    
  });
};
    
  
$(document).ready(main);