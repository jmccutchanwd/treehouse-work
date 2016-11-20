function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1; 
  return randomNumber;
}

//console.log(getRandomNumber(12));
//console.log(getRandomNumber(120));
//console.log(getRandomNumber(300));
//console.log(getRandomNumber(12000));

function getArea(width, length, unit) {
  var area = width * length;
  return area + " " + unit;
}

//console.log(getArea(10, 20, 'sq ft'));

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  }else{
    return num2;
  }
}
  
//console.log( max(8, 5) );

