// https://gist.github.com/alvinoalvin/e722d393ed2cde2c12d072c78d04cec1
const sumLargestNumbers = function (data) {
    // Put your solution here
    max = data[0];
    max2 = 0;

    for (number of data) {
        if (number > max) {
            if (max > max2) {
                max2 = max
            }
            max = number
        }
        else if (max > max2 && number > max2) {
            max2 = number
        }
    }
    return max + max2
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

