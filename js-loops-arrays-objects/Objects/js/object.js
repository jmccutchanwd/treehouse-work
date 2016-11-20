console.log('begin');

var person = {
  name : 'John',
  country : 'US',
  age : 48,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '.</p>';
message += '<p>I live in the ' + person.country + '.</p>';
person.name = 'Jazz Hands';
message += '<p>But, I wish my name was ' + person.name + '.</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '.</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '.</p>';

print(message);

console.log('end');