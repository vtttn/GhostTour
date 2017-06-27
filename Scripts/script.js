
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


// Parsley Form Validation 
$(function () {
  $('#contact').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.bs-callout-info').toggleClass('hidden', !ok);
    $('.bs-callout-warning').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    return false; 
  });
});





// console.log($('.parsley-required').html());


