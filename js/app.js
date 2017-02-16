var main = function () {
  var isMenuVisible = false;
  $('.icon-menu').click(function () {
    if (isMenuVisible == false) {
      $('.menu').animate({
        left: '0px'
      }, 200);
      
      $('body').animate({
        left: '285px'
      }, 200);
      isMenuVisible = true;
    } else {
      $('.menu').animate({
        left: '-285px'
      }, 200);
      $('body').animate({
        left: '0px'
      }, 200);
      isMenuVisible = false;
  
    }
    
  });
};
    
  
$(document).ready(main);