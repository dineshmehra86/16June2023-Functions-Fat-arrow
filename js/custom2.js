// 1. Global variable
// var declaration and intialization
var mylaptop="Sliver color DELL laptop"

// 1. Function Defination
function brandName() {
    // Function body
    // Statements
    // Variable defined inside a function is a local variable
    let phone = 'Vivo Y 35'; // Local variable
    console.log("I global variable inside the function block" +' '+ mylaptop); // Global variable can be call inside the function block
    
}
// 2. Function calling
brandName();
console.log("I global variable outside the function block" +' '+ mylaptop); // Global variable can be call outside the function block