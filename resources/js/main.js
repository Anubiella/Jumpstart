
$(document).ready(function(){
  
	$('.carousel').slick({
		accessibility: false,
		arrows: false,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	});

	var userScroll = 0;
	$(window).scroll(function(){
		var y = $(this).scrollTop();
		if ((y-userScroll)>50){
			var navheight = $('.navbar').css('height');
			$('.navbar').animate({
				top: '-'+navheight}, 150);
			userScroll=y;
		} else if((userScroll-y)>50){
			$('.navbar').animate({
				top: 0}, 150);
			userScroll=y;
		}
	});
});
	