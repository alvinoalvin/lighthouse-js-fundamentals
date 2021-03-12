const checkAir = function (samples, threshold) {
    // Code here!
    let dirtCount = 0;

    samples.forEach(sample => {
        if (sample == 'dirty') {
            dirtCount++;
        }
    });
    if ((dirtCount / samples.length) > threshold) {
        return "Polluted"
    }
    else { return "clean" }
};

console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
));

console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
));

console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
))
