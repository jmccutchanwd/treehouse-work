//Problem, no user interaction

//SOLUTION: When user rinteracts, app works
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


//When clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //Cache current color here;
  color = $(this).css("background-color");
//  console.log(this);
});

//When "new color" button is clicked
$("#revealColorSelect").click(function(){
  //Show color selector or hide the selector
  changeColor();
  $("#colorSelect").toggle();
});  

//Select new color with slider
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
//  console.log(this);
}
console.log("color");
//When color sliders change
$("input[type=range]").change(changeColor);

//When "add color" is pressed
$("#addNewColor").click(function(){
  //Append color to controls UL
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select new color
  $newColor.click();
});

//On mouse event
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});
