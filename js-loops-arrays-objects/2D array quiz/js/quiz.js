console.log('begin');

var quiz = [
  ['What is the capital of California?','Los Angeles'],
  ['What band performs "One" ?','U2'],
  ['What is the capital of Tennessee?','Nashville'],
  ['What is 5 times 5?','25'],
  ['What is the capital of England?','London']
];

var right = 0;
var answerHTML = '';

function print(message) {
  document.write(message);
}


for ( var i = 0; i < quiz.length; i++) {
  var ask = prompt(quiz[i][0]);
  if (ask === quiz[i][1])
    right += 1;
    console.log(right);
}

answerHTML = '<h2> You got ' + right + ' out of 5 correct.</h2>';
print(answerHTML);

console.log('end');