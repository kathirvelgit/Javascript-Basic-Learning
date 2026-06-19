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
    if (b !== 0) {
        console.log(a / b);

    }
    else {
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

let marks = 88;
let bonus = 5;

marks += bonus;


let grade;

if (marks >= 90) {
    grade = "Grade A";

}
else if (marks >= 70) {
    grade = "Grade B";

}
else if (marks >= 50) {
    grade = "Grade C";

}
else {
    grade = "Grade F";

}

console.log(grade);



let result = marks >= 50 ? "Pass" : "Fail";

let remark;


switch (grade) {
    case "Grade A":
        remark = "Excellent !";
        break;
    case "Grade B":
        remark = "Good";
        break;
    case "Grade C":
        remark = "Average";
        break;
    default:
        remark = "Needs Improvement";

}

console.log("Marks :", marks);
console.log("Grade :", grade);
console.log("Result :", result);
console.log("Remark: ", remark);

