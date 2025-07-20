const sumAll = function(min, max)    {
    if (min < 0 || max < 0) return "ERROR";
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

sumAll(1, 4);
sumAll(1, 1);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

console.log(sumAll(1, 4));
console.log(sumAll(1, 1));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(2.5, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
