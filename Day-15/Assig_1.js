let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let oddIndexSum = arr.reduce((sum, current, index) => {
    if (index % 2 === 1) {
        return sum + current;
    }
    return sum;
}, 0);

let count = arr.length / 2; 
let average = oddIndexSum / count;
console.log("Average of elements at odd indices:", average);