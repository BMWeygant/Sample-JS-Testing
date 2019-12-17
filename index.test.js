const {add, sub, total, stringTheory, myBeverage} = require('./index');


describe('Math Labs', () => {
    describe('add', () => {
        test('add() is a function that takes 2 arguments,adds them together, and returns the sum', () => {
         expect(add(1, 2)).toBe(3)
    })
})
    describe('sub', () => {
        test('sub() is a function that takes 2 arguments, subtracts them, and returns the difference', () => {
            expect(sub(2, 1)).toBe(1)
    })
})
    describe('total', () => {
        test('total', () => {
            expect(total(10, 15)).toBe('$25')
            expect(total(20, 25)).toBe('$45')
        })
    })
})
describe('Non-Math Labs', () => {
    describe('stringTheory', () => {
        test('stringTheory is a function that returns a string equal to "Some wild shit!"', () => {
            expect(stringTheory()).toBe('Some wild shit!')
    })
})
    describe('myBeverage', () => {
        test('is delicious', () =>{
            expect(myBeverage.delicious).toBeTruthy()
    })
        test('is sour', () => {
            expect(myBeverage.sour).toBeFalsy()
      })
    })
})
