console.log('Begin');

function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

var counter = 0;

while ( counter < 10 ) {
  var randNum = randomNumber(6);
  document.write('<h2 style="display: inline">' + randNum + ' </h2>');
  counter += 1;
}

console.log('End');