/* 
    SCOPE IN JAVASCRIPT

    scope refers to area in the program where a particular variable is accessible

    types:
    1. Global scope : variable declared out of fn or block. accessible anywhere
    2. Local scope :  variable declared in a function. accessible across the function.
    3. Block scope : variable declared inside curly braces{}. accesible inside {}


    NOTE!!
        VARIABLES DECLARED WITHOUT VAR/LET/CONST ARE CONSIDERED GLOBAL VARIABLES!
*/

/*
        SCOPE CHAINING
    (chain of reference)
    javascript checks for scope of a variable from inner block to outer.while checking so, 
    if variable is not found then it is decalred as error (reference error).

    Scope Chaining is the process by which JavaScript looks for variables. 
    When a variable is used in a function or block, JavaScript starts looking for that variable in the current scope. 
    If it doesn't find it, it moves to the outer scope, and so on, until it reaches the global scope. 
    If the variable is not found anywhere, it results in an error.

*/

// // global scope

// let globalVar = "hey";

// function hi(){
//     console.log(globalVar);
// }

// hi();



// // local scope 

// function hi() {
//     let localVar="i am local";
//     console.log(localVar);
// }

// console.log(localVar);
// hi();

// // !!  error due to local scope 


// // block scope

// {
//     let blockVar= "rishi"
// }

// console.log(blockVar);


// //scope chaining example
let outerVar = "I'm in the outer scope";

function outerFunction() {
    let innerVar = "I'm in the inner scope";

    function innerFunction() {
        console.log(innerVar); // Finds innerVar in the local (innerFunction) scope
        console.log(outerVar); // Finds outerVar in the outer (outerFunction) scope
    }

    innerFunction();
}

outerFunction();
