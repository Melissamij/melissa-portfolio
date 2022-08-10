
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
var coll = document.getElementsById("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    console.log("hqlo");
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}