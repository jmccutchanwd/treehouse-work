//Math.floor(Math.random() * (6 - 1 + 1)) + 1; 


function randomGen (lower, upper) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw new Error( 'Both arguments must be numbers' );
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}


document.write(randomGen('one', 10));
document.write(" " + randomGen(1, 50));
document.write(" " + randomGen(1, 100));
