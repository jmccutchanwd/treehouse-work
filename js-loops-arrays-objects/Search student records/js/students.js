console.log('begin');

var students = [
  {
    name : 'John',
    track : 'Web Development',
    achievements : 31,
    points : 3991
  },
  {
    name : 'Bill',
    track : 'Ruby Development',
    achievements : 21,
    points : 2991
  },
  {
    name : 'John',
    track : 'RailsDevelopment',
    achievements : 11,
    points : 1991
  },
  {
    name : 'Honzell',
    track : 'PHP Development',
    achievements : 30,
    points : 3971
  },
  {
    name : 'Dixie',
    track : 'Couch Lounging',
    achievements : 61,
    points : 13991
  }
];

var search;
var stuRecord = '';

// print function to html 
function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

// endless loop
while (true){
  search = prompt ('Please enter name of student: ');
  if ( search === null || search.toLowerCase()  === 'quit') {
    break;
  } else {
    for ( var i = 0; i < students.length; i ++ ) {
      if ( search.toLowerCase() === students[i].name.toLowerCase() ) { 
        stuRecord += '<h2>Name: ' + students[i].name + '</h2>';
        stuRecord += '<p>Track: ' + students[i].track + '</p>';
        stuRecord += '<p>Achievements: ' + students[i].achievemnents + '</p>';
        stuRecord += '<p>Points: ' + students[i].points + '</p>';
      } 
    }
  }
}
print(stuRecord); // calls print function, sends to html

console.log('end');

