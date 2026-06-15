//calculator logic
let a = 10;
let b = 0;

let operator = "/";

if (operator === "+") {
    console.log(a + b);

}
else if (operator === "-") {
    console.log(a - b);
}
else if (operator === "*") {
    console.log(a * b);
}
else if (operator === "/") {
if(b !== 0){
        console.log(a / b);

}
else{
    console.log("b cannot be zero");
    
}
    
}
else if (operator === "%") {
    console.log(a % b);
}
else {
    console.log("Not a valid operator");

}


//Stutent mark 

let mark = 88;
let bonus = 5;

mark += bonus;

console.log(mark);


let grade;

if(mark>90){
    grade = "Grade A";
    
}
else if(mark>=70 && mark <= 89){
   grade = "Grade B";

}
else if(mark>=50 && mark <=69){
    grade = "Grade C";

}
else {
    grade = "Grade F";

}

console.log(grade);



let status = mark >= 50 ? "Pass" : "Fail";
console.log(status);



switch(grade){
    case "Grade A" :
        console.log("Excellent !");
        break;
    case "Grade B" :
        console.log("Good");
        break;
    case "Grade C" :
        console.log("Average");
        break; 
    default :
     console.log("Needs Improvement");

}