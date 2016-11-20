console.log('begin program');

var html = '';
var rgbColor;

function randomRGB(){
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

for ( var i = 1; i <= 100; i ++ ) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);

console.log('end program');


