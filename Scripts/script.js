
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


// Lightbox
document.getElementById('links').onclick = function (event) {
event = event || window.event;
var target = event.target || event.srcElement,
    link = target.src ? target.parentNode : target,
    options = {index: link, event: event},
    links = this.getElementsByTagName('a');
blueimp.Gallery(links, options);
};


// GMAPS

    // var map = new GMaps({
    //   el: '#map',
    //   lat: -12.043333,
    //   lng: -77.028333
    // });

map.addMarker({
        lat: 29.961058, 
        lng: -90.063533,
        infoWindow: {
        content: '<p>Lafitte Blacksmith Shop Bar</p>',
      }
      });
