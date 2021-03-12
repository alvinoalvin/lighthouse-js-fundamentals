const numberOfVowels = function (data) {
    // Put your solution here
    let vowels = ["a", "e", "i", "o", "u",]
    let vowelCount = 0;

    for (letter of data) {
        if (vowels.includes(letter)) {
            vowelCount++;
        }
    };

    return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
