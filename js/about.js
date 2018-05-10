
$(".btn").click(function () {
    var roll = document.getElementsByClassName("roll-wrapper")
    var val = $(".board-text").val();
    var myText = document.createElement("div");
    var myStr = document.createTextNode(val);
    myText.appendChild(myStr);
    roll[0].appendChild(myText);
    $(".board-text").val("");
})