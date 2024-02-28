
let arr = [3, 4, 5, 6, 7];
let output = "";

arr.forEach((element, index) => {
    if (element % 2 !== 0) {
        if (output !== "") {
            output += " - ";
        }
        output += element;
    }
});

console.log(output);