var main = function () {
    $('.icon-menu').click(function () {
      $('.menu').animate({
        left: '0px'
      }, 200);
      
      $('body').animate({
        left: '285px'
      }, 200);
      $('.icon-menu').toggle();
      $('.icon-menu-black').toggle();
      
    });
  };

var close = function () {
    $('.icon-menu-black').click(function () {
      $('.menu').animate({
        left: '-285px'
      }, 200);
      $('body').animate({
        left: '0px'
      }, 200);
      $('.icon-menu').toggle();
      $('.icon-menu-black').toggle();
    
    });
  };

  
$(document).ready(main);
$(document).ready(close);
