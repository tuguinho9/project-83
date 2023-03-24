canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty";
var lastPositionX = 0;
var lastPositionY = 0;
cor = "red";
widthLine = 2;
raio = document.getElementById("raio").value;
canvas.addEventListener("mousedown", myMouseDown);
width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;
touchpositionX = 0;
touchpositionY = 0;
if(width < 992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = hidden;
}
canvas.addEventListener("touchstart", myTouchstart);
function myTouchstart(e) {
    cor = document.getElementById("color").value;
    width = document.getElementById("borda").value;
}
canvas.addEventListener("touchmove", myTouchmove);
function myTouchmove(e) {
    touchX = e.touches[0].clientX - canvas.offsetLeft;
    touchY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = widthLine;
    ctx.moveTo(touchpositionX, touchpositionY);
    ctx.lineTo(touchX, touchY);
    ctx.stroke();
    touchpositionX = touchX;
    touchpositionY = touchY;
}
function myMouseDown(e) {
    mouseEvent = "mousedown";
    cor = document.getElementById("color").value;
    widthLine = document.getElementById("borda").value;
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    PositionX = e.clientX - canvas.offsetLeft;
    PositionY = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.lineWidth = widthLine;
        ctx.moveTo(lastPositionX, lastPositionY);
        ctx.lineTo(PositionX, PositionY);
        ctx.stroke();
    }
    lastPositionX = PositionX;
    lastPositionY = PositionY;
}
