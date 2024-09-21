$(document).ready(function() {
	$(".fa-bars").on("click", function() {
		$(this).hide();
		$(".fa-close").show();
		$("nav").css({
			"width": "50%", "display": "flex"
		});
	})
	$(".fa-close").on("click", function() {
		$(this).hide();
		$(".fa-bars").show();
		$("nav").css("width", "0%");
	})
	$(".portfolio").hover(function() {
		$(".portfolio p").slideDown();
	}, function() {
		$(".portfolio p").slideUp();
	})
	$(".data").hover(function() {
		$(".data p").slideDown();
	}, function() {
		$(".data p").slideUp();
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
	$(".resume").hover(function() {
		$(".resume p").slideDown();
	}, function() {
		$(".resume p").slideUp();
	})
	/*	$(".test").click(function() {
		let div = "<div class='test'>Jerry</div>"
		$(div).insertAfter("div");
	})*/
})