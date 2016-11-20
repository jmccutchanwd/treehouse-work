var randomNumber = Math.floor(Math.random() * 6) +1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if(parseInt(guess) === randomNumber) {
  document.write('<h2>You guessed it!</h2>');
}else{
  document.write('<h2>Sorry. The number was ' + randomNumber + '.</h2>');
}                 