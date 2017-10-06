$(document).ready(function() {
//////////////////////////////
//--------------------- FLOATING NAV
//////////////////////////////
$(".floating-top").hide();
$(window).scroll(function() {
	if ($(document).scrollTop() > ( $(window).innerHeight() )/4 ) {
		$('.floating-top').show().css('position','fixed');
		$('.navigation').addClass('navigation-fixed');
		if ($('.navigation').hasClass('navigation-fixed')){
			$('.logo').css({
				'margin-right': '320'+'px',
				'margin-bottom': '0'+'px' 
			});
		}
	}
	else{$('.floating-top').hide();
	$('.navigation').removeClass('navigation-fixed');
	$('.logo').css({
		'margin-right': '345'+'px',
		'margin-bottom': '40'+'px' 
	});
}
});
var topoffset = 10;
$('.floating-top a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//, '') ===
		this.pathname.replace(/^\//, '') &&
		location.hostname === this.hostname) {
		var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	if (target.length) {
		$('html,body').animate({
			scrollTop: target.offset().top - topoffset + 2
		}, 500);
		return false;
        } //target.length
    } //click function
  }); 
//////////////////////////////
//--------------------- 		/////FLOATING NAV
//////////////////////////////

//////////////////////////////
//--------------------- DROPDOWN
//////////////////////////////
$(this).find('.sub-sub-ul').hide();
$('.navigation ul li').hover(
	function() {
		$(this).addClass("active");
		$(this).find('.sub-ul').stop(true, true);
		$(this).find('.sub-ul').fadeIn();       
	},
	function() {
		$(this).removeClass("active");
		$(this).find('.sub-ul').hide();
	}
	);
$('.sub-ul li').hover(
	function() {
		$(this).addClass("active");
		$(this).find('.sub-sub-ul').stop(true, true);
		$(this).find('.sub-sub-ul').fadeIn();       
	},
	function() {
		$(this).removeClass("active");		
		$(this).find('.sub-sub-ul').hide();
	}
	);
//////////////////////////////
//---------------------       DROPDOWN
//////////////////////////////

//////////////////////////////
//--------------------- SEARCH
//////////////////////////////
$(".form-search").hide();
$('label.del').click(function(){
	$('label.del').hide();
	$('#search .form-search').show('slow');
	// $('label.del').css('margin-left', 79+'px');
	$('.navigation-fixed').css('margin-left', 7+'%');
	$('.navigation-fixed').css('width', 46+'%');

	$('.logo').css('margin-right',270+'px')
});
// $(window).scroll(function(){
	// $('.logo').css('margin-right',230+'px')
// });
$(document).click(function(event){
	if ($(event.target).closest("#search").length) return;
	$('label.del').show();
	$(".form-search").hide("slow");
	// $('label.del').css('margin-left', 0+'px');	
	$('.navigation-fixed').css('margin-left', 10+'%');
	$('.navigation-fixed').css('width', 'initial');
	// $('.logo').css('margin-right',270+'px')
	event.stopPropagation();
});	
//////////////////////////////
//--------------------- //////SEARCH
//////////////////////////////

//////////////////////////////
//--------------------- MASONRY
//////////////////////////////
var $container = $('#m-container');
$container.masonry({
	itemSelector: '.grid-item',
	gutter: 30,
	columnWidth: 170
});
//////////////////////////////
//---------------------  /////// MASONRY
//////////////////////////////
$('#footer iframe').hide();
$('.footer-btn').click(
	function() {
	$('#footer>iframe').show();	
	$(document).click(function(event){
	if ($(event.target).closest("#footer iframe").length || $(event.target).closest(".footer-btn").length) return;	
	$("#footer iframe").hide("slow")	
	event.stopPropagation();
});	
});
});
