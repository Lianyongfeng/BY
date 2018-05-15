$(".nav-menu").click(function(){
    $(this).children(".nav").toggle(1000);
})
$(".nav-menu").mouseenter(function () {
    $(this).children(".nav").stop(false,true).slideDown(1000)
})
$(".nav-menu").mouseleave(function () {
    $(this).children(".nav").stop(false,true).slideUp(1000)
})

$(".btn").click(function () {
    var roll = document.getElementsByClassName("roll-wrapper")
    var val = $(".board-text").val();
    var myText = document.createElement("div");
    var myStr = document.createTextNode(val);
    myText.appendChild(myStr);
    roll[0].appendChild(myText);
    $(".board-text").val("");
    localStorage.setItem("value",val)
})
