/*
1) This is a quiz game with 5 questions.
2) It keeps track of the nummber of questions answered         correctly.
3) It provides a final message displayed on the page.
4) It ranks the player on the following scale:
*5 correct answers = Gold Crown
*3-4 correct answers = Silver Crown
*1-2 correct answers = Bronze Crown
*0 correct answers = no crown.
*/

console.log('Begin program.');

// set score counter
var counter = 0;

// set question counter
var counterQ = 4;

// ask 5 questions
var question1 = prompt('What is 2 + 2?' + ' You have ' + counterQ + ' questions left.');
counterQ -= 1;
var question2 = prompt('What is 3 + 5?' + ' You have ' + counterQ + ' questions left.');
counterQ -= 1;
var question3 = prompt('What is 4 divided by 2?' + ' You have ' + counterQ + ' questions left.');
counterQ -= 1;
var question4 = prompt('What is 3 x 2?' + ' You have ' + counterQ + ' questions left.');
var question5 = prompt('What is 5 x 10?');

// compare results add correct answer to counter
if (parseInt(question1) === 4 ) {
  counter += 1;
}
if (parseInt(question2) === 8 ) {
  counter += 1;
}
if (parseInt(question3) === 2 ) {
  counter += 1;
}
if (parseInt(question4) === 6 ) {
  counter += 1;
}
if (parseInt(question5) === 50 ) {
  counter += 1;
}

// rank player and provide results to page
if (counter === 5) {
  document.write('<h2>You got ' + counter + ' correct, and you receive a gold crown!</h2>');
} else if(counter === 4 || counter === 3) {
  document.write('<h2>You got ' + counter + ' correct, and you receive a silver crown!</h2>');
} else if(counter === 2 || counter === 1) {
  document.write('<h2>You got ' + counter + ' correct, and you receive a bronze crown!</h2>');
} else {
  document.write('<h2>You got ' + counter + ' right and you receive no crown.</h2>');
}

console.log('End program.');





