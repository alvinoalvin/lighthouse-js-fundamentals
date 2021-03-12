const conditionalSum = function (values, condition) {
    let sum = 0;
    
    values.forEach(val => {
        if (condition == "even") {
            if ((val % 2) == 0) {
                sum += val;
            }
        } else if (condition == "odd") {
            if ((val % 2) == 1) {
                sum += val
            }
        }
    });

    return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
