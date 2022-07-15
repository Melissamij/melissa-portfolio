$(document).ready(function (){
    var maxHeight = 0;
    for(i=0;i<$(".card").length;i++){
      if($(".card").eq(i)){
        var currentHeight = $(".card").eq(i).height();
        if(currentHeight>=maxHeight){
          maxHeight = currentHeight;
        }
      }
      else{
        break;
      }
    }
    $(".card").height(maxHeight);
  });


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