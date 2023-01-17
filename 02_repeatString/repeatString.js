const repeatString = function(text, repeatNr) {
    let repeatedString = '';
    if (repeatNr < 0) {
        repeatedString = 'ERROR';
    }
    else {
        for (i = 0; i < repeatNr; i++) {
            repeatedString += text;
        };
    }

    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
