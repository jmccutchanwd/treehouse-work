console.log('Begin');
var firstNumber = prompt('Please enter a whole number');
firstNumber = parseInt(firstNumber);
console.log('User Number:' + firstNumber);
newNumber = Math.floor(Math.random() * firstNumber) + 1;
console.log('New number:' + newNumber);
document.write('Your number is: ' + newNumber);
console.log('End');