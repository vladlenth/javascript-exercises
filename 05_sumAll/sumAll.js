const sumAll = function(min, max) {
    let sum = 0; 
    for (let i = Math.min(min, max); i <= Math.max(min, max); i++) { 
        sum += i;            
    } return sum; 
} 
// Do not edit below this line
module.exports = sumAll;

