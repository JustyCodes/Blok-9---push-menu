var main = function () {
    $('.icon-menu').click(function () {
      $('.menu').animate({
        left: '0px'
      }, 200);
      
      $('body').animate({
        left: '285px'
      }, 200);
      
      $('.icon-menu').addClass('close').removeClass('icon-menu');
    });
  
    
  };
$(document).ready(main);