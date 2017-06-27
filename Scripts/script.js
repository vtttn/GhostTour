$(window).resize (function(){
    if($(window).width() < 520){
 	$('.gallery_img').removeClass('col-xs-6');
 	$('.gallery_img').addClass('col-xs-12');
 } else {
 	$('.gallery_img').removeClass('col-xs-12');
 	$('.gallery_img').addClass('col-xs-6');
 }
});
// fuck yeah. got it to resize the gallery when it's smaller than col-xs