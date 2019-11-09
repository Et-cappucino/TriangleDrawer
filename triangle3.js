const reader = require("readline-sync");

let input = reader.question("your input = ");

function drawTriangleUp (row) {
    let a = "*";
    let b = " ";
    let index = 1;
    let i = 1;
    let j = input;
    while(index<=row){
        let result = b.repeat(j) + a.repeat(i);  
        console.log(result);
        j--;
        i++;
        index++;
    }
}
drawTriangleUp(input);

function drawTriangleDown (row) {
    let a = "*";
    let b = " ";
    let i = 1;
    let j = input;
    while(row>0){
        let result = b.repeat(i) + a.repeat(j);  
        console.log(result);
        j--;
        i++;
        row--;
    }
}
drawTriangleDown(input);