console.log('begin');

var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];

var correctQuestions = [];
var wrongQuestions = [];

var correctAnswers = 0;
var wrongAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  return(listHTML);
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    correctQuestions.push(question);
  } else {
    wrongAnswers +=1;
    wrongQuestions.push(question);
  }
}

console.log(correctQuestions);
console.log(wrongQuestions);

html = "You got " + correctAnswers + " question(s) right, and " + wrongAnswers + " wrong."
html += "<h2>Questions you got right:</h2>"; 
html += printList(correctQuestions);
html += "<h2>Questions you got wrong:</h2>";
html += printList(wrongQuestions);

print(html);

console.log('end');