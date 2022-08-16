
  $('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle(300);
    $(this).toggleClass('active');
  });

// animate on scroll activate 
AOS.init({
    duration: 500
});




