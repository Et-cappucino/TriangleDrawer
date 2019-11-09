const reader = require("readline-sync");

let rows = reader.question("How many rows =  ");

function upwardTriangle (num) {
  for(let i=1; i<=num; i++){
    let star = "*";
    let rowOfStars = star.repeat(i);
    console.log(rowOfStars);
    ;
  }
}

upwardTriangle(rows);

function downwardTrinagle (num) {
    while(num>0){
        let star = "#";
        let rowOfStars = star.repeat(num);
        console.log(rowOfStars);
        num--;
      }
}
downwardTrinagle(rows);