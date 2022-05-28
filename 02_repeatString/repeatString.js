const number = Math.floor(Math.random() * 1000);

const repeatString = function(string, num) {
    let phrase = "";
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        phrase+=string;
    }
    return phrase;
};



// Do not edit below this line
module.exports = repeatString;
