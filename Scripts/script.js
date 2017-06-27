
// heck yeah. got it to resize the gallery when it's smaller than col-xs
$(window).resize (function(){
    if($("div.gallery").width() < 530){
 	$('.gallery_img').removeClass('col-xs-6');
 	$('.gallery_img').addClass('col-xs-12');
 } else {
 	$('.gallery_img').removeClass('col-xs-12');
 	$('.gallery_img').addClass('col-xs-6');
 }
});

// Prevent jQuery UI dialog + Bootstrap from blocking focusin
$(document).on('focusin', function(e) {
  if ($(e.target).closest(".mce-window, .moxman-window").length) {
    e.stopImmediatePropagation();
  }
});


// $( document ).ready(function() {
//     console.log( "ready!" );
// });


