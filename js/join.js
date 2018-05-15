$(".nav-menu").click(function(){
    $(this).children(".nav").toggle(1000);
})
$(".nav-menu").mouseenter(function () {
    $(this).children(".nav").stop(false,true).slideDown(1000)
})
$(".nav-menu").mouseleave(function () {
    $(this).children(".nav").stop(false,true).slideUp(1000)
})


$(".register").click(function () {
    var usNameVal = /^[a-z0-9_-]{4,16}$/
    var usName = $(".usName").val()
    var usCodeVal = /[a-z0-9_-]{6,18}$/
    var usCode = $(".usCode").val()
    if(!usNameVal.test(usName)){
        alert("用户名正确格式为4到16位（字母，数字，下划线，减号）")
    }
    else if(!usCodeVal.test(usCode)){
        alert("用户名正确格式为6到18位（字母，数字，下划线，减号）")
    }
    else {
        var time = new Date().getTime() + Math.random() * 5;
        localStorage.setItem("pre" + time,usName);
        localStorage.setItem("code" + time,usCode);
        alert("注册成功")
        window.open("../index.html")
    }
})