
  $('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(100);
    $(this).toggleClass('active');
  });

// animate on scroll activate 
AOS.init({
    duration: 500
});

// pop up gallery 
lightGallery(document.getElementById('lightgallery'), {
    speed: 500,
    download: false
    
});


// collaps
