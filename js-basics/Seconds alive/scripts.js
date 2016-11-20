var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write('There are ' + secondsPerDay + ' seconds per day.');
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * 49;
document.write(' I have been alive ' + secondsAlive + ' seconds');