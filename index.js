//Solution using non ES6 Javascript.
function add(a, x){
    return a + x
}
//Solution using ES6 Javascript 
//This highlights test cases ability to read different solutions to the same problem.
const sub = (x, y) => x - y


//Solution to a test case written to test basic booleans in an object
const myBeverage = {
    delicious: true,
    sour: false,
    full: true
}

//Solution to test total and verify other predefined functions are usable for test purposes
const total = (subTotal, shipping) => {
    newTotal = add(subTotal, shipping)
       return '$' + `${newTotal}`
}
/* return '$' + `${add(subTotal + shipping)}` also satisfies test requirement
However, setting solution to a variable is good practice
Just in case you wanted to implement more functions within total
For example a tax function.*/


//ES6 style solution to test a function that returns a specific string
const stringTheory = () => "Some wild shit!"

module.exports = {add, sub, total, stringTheory, myBeverage}