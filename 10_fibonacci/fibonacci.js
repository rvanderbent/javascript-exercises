const fibonacci = function(number) {
    if (number < 0){
        return "OOPS";
    }
    let last = 0;
    let secLast = 0;
    let fib = 1;
    for (let i = 0; i < number; i++){
        if (last === 0){
            fib = 1;
        }
        else {
            fib = last + secLast;
        }
        secLast = last;
        last = fib;
    }
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
