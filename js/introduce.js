$(".nav-menu").click(function(){
    $(this).children(".nav").toggle(1000);
})
$(".nav-menu").mouseenter(function () {
    $(this).children(".nav").stop(false,true).slideDown(1000)
})
$(".nav-menu").mouseleave(function () {
    $(this).children(".nav").stop(false,true).slideUp(1000)
})

function bg() {
    if($(".on").next().length==0){
        $(".on").removeClass("on");
        $(".Carousel-figure>div:first-child").addClass("on");
    }
    else {
        $(".on").removeClass("on").next().addClass("on");
    }
    var back = $(".on").css('backgroundImage');
    var src = ".." + back.substring(65,76)
    console.log(src);
    $(".on").css('backgroundImage',src);
}
var timer = setInterval(bg,2000);
$(".Carousel-figure").mouseenter(function () {
    clearInterval(timer);
});
$(".Carousel-figure").mouseleave(function () {
    timer = setInterval(bg,2000);
});

$(".glyphicon-menu-right").click(function () {
    $(".on").removeClass("on").next().addClass("on");
    if($(".on").next().length==0) {
        $(".on").removeClass("on");
        $(".Carousel-figure>div:first-child").addClass("on");
    }
});
$(".glyphicon-menu-left").click(function () {
    $(".on").removeClass("on").prev().addClass("on");
    if($(".on").prev().length==0){
        $(".on").removeClass("on");
        $(".Carousel-figure>div:first-child").addClass("on");
    }
})
