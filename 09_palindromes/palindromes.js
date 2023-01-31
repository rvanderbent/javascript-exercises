const palindromes = function (string) {
    let charArray = string.toLowerCase().split('');
    const punctuation = " .,!:;'?`".split('');
    charArray = charArray.filter(letter => {
        for(let i = 0; i < punctuation.length;i++){
            if(letter ==  punctuation[i]){
                return false;
            }
        }
        return true;
    });

    for (let i = 0, j = charArray.length -1; i < Math.floor(charArray.length/2); i++,j--){
        if(charArray[i] !== charArray[j]){
            return false;
        };
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
