const reader = require("readline-sync");

let rows = reader.question("Rows = ");

function func (row) {
  let i = 1;
    while(i<=row){
     let j=i;
     let a = "*";
     let b = a.repeat(j);
     console.log(b);
     i++;
   }
} 
func(rows);



