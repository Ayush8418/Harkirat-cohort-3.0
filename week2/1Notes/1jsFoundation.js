console.log("hello world");


// call-back functions 

function sum(num1, num2, fnToCall) {
    let result = num1 + num2;
    return fnToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

sum(5,5,displayResult);   // sum function calling  displayResult function

sum(5,4,displayResultPassive);    // sum function calling  displayResultPassive function

sum(5,3, (ans)=>{                           // defining arrow function as callback for other function
    console.log("tha sum of numbers is: ",ans);
})


// setTimeOut callback function
// example 2:
function greet(){
    console.log("hello world");
}
setTimeout(greet, 3*1000)

// example 3: 
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function arithemetic( a, b, opr){
    return opr(a,b);
}

let res1 = arithemetic(5,2,sum);        //performing sum
let res2 = arithemetic(5,2,sub);        //performing sub

console.log(res1, res2);

