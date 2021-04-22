canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="";
var last_position_x, last_position_y;
console.log("loaded file")
color="black";
width=2;
//mouse up block
canvas.addEventListener("mouseup", my_mouseUp);

function my_mouseUp(e){
    console.log("up");
   mouseEvent="mouseUp"; 
}
//mouse leave block
canvas.addEventListener("mouseleave", my_mouseLeave);

function my_mouseLeave(e){
    console.log("leave");
   mouseEvent="mouseLeave"; 
}
//mouse down block + to get color and width from user
canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e){
    console.log("down");
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
   mouseEvent="mouseDown"; 
}
//mouse move, mouse move + mouse down
canvas.addEventListener("mousemove", my_mouseMove);

function my_mouseMove(e){

    current_position_X=e.clientX-canvas.offsetLeft;
    current_position_Y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_position_X, current_position_Y, 60, 0, 10);
        ctx.stroke();

    }

    last_position_x = current_position_X;
    last_position_y = current_position_Y;
}
function clear(){
    location.reload();
}