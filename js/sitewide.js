$(window).scroll(function(){
	$(".backgroundoverview").css("opacity", 1 - $(window).scrollTop() / 225);
});

$(window).scroll(function(){
	$(".backgroundhistory").css("opacity", 1 - $(window).scrollTop() / 225);
});

$(window).scroll(function(){
	$(".backgroundimpact").css("opacity", 1 - $(window).scrollTop() / 225);
});

$(window).scroll(function(){
	$(".headerbackground").css("opacity", $(window).scrollTop() / 225);
});
