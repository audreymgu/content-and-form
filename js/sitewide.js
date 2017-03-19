$(window).scroll(function(){
	$(".background").css("opacity", 1 - $(window).scrollTop() / 225);
});

$(window).scroll(function(){
	$(".headerbackground").css("opacity", $(window).scrollTop() / 600);
});