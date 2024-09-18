$(document).ready(function() {
    $(".fa-bars").on("click", function() {
        $("nav").width("100%");
        $("#logo").css("visibility", "hidden");
        $(this).hide();
        $(".fa-close").show();
    })
    $(".fa-close").on("click", function() {
        $("nav").width("0");
        $("#logo").css("visibility", "visible");
        $(this).hide();
        $(".fa-bars").show();
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
})