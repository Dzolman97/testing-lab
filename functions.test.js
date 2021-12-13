const { returnTwo, greeting, add } = require("./functions.js");

test("should run", () => expect(returnTwo()).toBe(2))

// test("should output 'Hello, -whatever name was input-'", () => expect(greeting('James')).toEqual("Hello, James"))
describe('Testing the greeting gunction', () => {
   it('Should greet James and Jill', () => expect(greeting('James')).toEqual("Hello, James")) && it('Should greet Jill', () => expect(greeting('Jill')).toEqual("Hello, Jill"))
   // it('Should greet Jill', () => expect(greeting('Jill')).toEqual("Hello, Jill"))
})

// test("shpuld get the sum of two numbers being input", () => expect(add(5, 5)).toEqual(10))
describe('Testing add function', () => {
   it('Should get the sum of 2 numbers', () => expect(add(1, 2)).toEqual(3)) && it('Should add 5 and 9', () => expect(add(5, 9)).toEqual(14))
   // it('Should add 5 and 9', () => expect(add(5, 9)).toEqual(14));
})