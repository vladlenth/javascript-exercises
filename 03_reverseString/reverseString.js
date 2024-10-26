const reverseString = function(str) {
    let words = str.split('').filter(word => word);
    words.reverse();
    return words.join('');

};

// Do not edit below this line
module.exports = reverseString;


// const repeatString = function(word,n) {
//     let result = "";
//     for (let i = 0; i < n; i++) {
//         result += word;
//     }
//     return result;
// }