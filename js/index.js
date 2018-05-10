$(".nav-menu").click(function(){
    $(this).children(".nav").toggle(1000);
})
$(".nav-menu").mouseenter(function () {
    $(this).children(".nav").stop(false,true).slideDown(1000)
})
$(".nav-menu").mouseleave(function () {
    $(this).children(".nav").stop(false,true).slideUp(1000)
})







