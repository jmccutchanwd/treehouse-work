// Vars and prompt to get var content
var str = prompt("Enter some text");
var numChars = str.length;
console.log("User typed: " + str + ", String length: " + str.length);

// Tests for double spaces
for (var i = 0; i < str.length; i++) {
if (str.slice(i, i + 2) === "  ") {
    alert("No double spaces allowed!");
    break;
  }
}

// Prompt to get city name
var cityToCheck = prompt("Please enter a city.");

// Slice result 
var firstChar = cityToCheck.slice(0, 1);// First letter
var otherChars = cityToCheck.slice(1);// rest of letters

// Changes first letter to caps, rest to lowercase
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();

// Concats segments
var cappedCity = firstChar + otherChars;

console.log("City capitalized: " + cappedCity);

