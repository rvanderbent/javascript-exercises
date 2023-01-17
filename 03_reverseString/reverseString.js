const reverseString = function(text) {
    let splitText = text.split('');
    let reversedText = "";
    for (let i = splitText.length-1; i >= 0; i--) {
        //console.log(splitText[i]);
        reversedText += splitText[i];
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;

