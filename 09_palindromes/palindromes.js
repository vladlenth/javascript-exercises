const palindromes = function (word) {
    let wordR = word.split("").reverse().join("");
    if (wordR === word) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
