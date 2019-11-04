const add = (a, b) => a + b

const sub = (a, b) => a - b

// const total = (subTotal, shipping) => { 
//     return '$'+ add(subTotal, shipping)
// }

function total(subTotal, shipping){
    return '$' + add(subTotal, shipping)
}

function stringTheory() {
return "Some wild shit!"
}

const myBeverage = {
    delicious: true,
    sour: false
}
module.exports = {add, sub, total, stringTheory, myBeverage}