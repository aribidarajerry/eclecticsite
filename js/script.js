$(document).ready(function() {
	$(".fa-bars").click(function() {
		$(this).toggleClass("fa-close");
		$("nav").toggleClass("active")
	});
	
	$(".portfolio").hover(function() {
		$(".portfolio p").slideDown();
	}, function() {
		$(".portfolio p").slideUp();
	})
	$(".calculator").hover(function() {
		$(".calculator p").slideDown();
	}, function() {
		$(".calculator p").slideUp();
	})
	$(".princess").hover(function() {
		$(".princess p").slideDown();
	}, function() {
		$(".princess p").slideUp();
	})
	$(".data").hover(function() {
		$(".data p").slideDown();
	}, function() {
		$(".data p").slideUp();
	})
	$(".resume").hover(function() {
		$(".resume p").slideDown();
	}, function() {
		$(".resume p").slideUp();
	})
})