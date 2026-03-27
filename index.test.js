import { describe, expect, test } from '@jest/globals';
import { capitalize, reverse, calculator, caesarCipher, analyzeArray } from '.';

describe("Solves 1 and 2 for the 'Testing Practice' lesson", () => {
    const capitalizeTestCases = [{ value: "umaString", expected: "UmaString" }, { value: "OutraString", expected: "OutraString" }, { value: "", expected: "" }]
    test.each(capitalizeTestCases)("Takes a string and returns it with the first character capitalized.", (s) => {
        const valueToTest = capitalize(s.value);
        expect(valueToTest).toEqual(s.expected);
    })

    const reverseTestCases = [{ value: "abcde", expected: "edcba" }, { value: "ava", expected: "ava" }, { value: "", expected: "" }]
    test.each(reverseTestCases)("Takes a string and returns it reversed.", (s) => {
        expect(reverse(s.value)).toEqual(s.expected);
    })
});

describe("Solves the 'calculator' test for the 'Testing Practice' lesson. Create an object that contains functions for the basic operations: add, subtract, divide, and multiply.", () => {
    const op1 = 5;
    const op2 = 2;
    const addRes = 7;
    const subtractRes = 3;
    const multiplyRes = 10;
    const divideRes = 2.5;
    const calc = calculator();

    it("Return object should be defined.", () => {
        expect(calc).toBeDefined();
    })
    it("Should perform sum correctly.", () => {
        expect(calc.add(op1, op2)).toEqual(addRes);
    });
    it("Should perform subtraction correctly.", () => {
        expect(calc.subtract(op1, op2)).toEqual(subtractRes);
    });
    it("Should perform multiplication correctly.", () => {
        expect(calc.multiply(op1, op2)).toEqual(multiplyRes);
    });
    it("Should perform division correctly.", () => {
        expect(calc.divide(op1, op2)).toEqual(divideRes);
    });
    it("Should return 'infinity' when operator 2 is 0.", () => {
        expect(calc.divide(op1, 0)).toEqual(Infinity);
    });
})

describe("Solves the 'caesarCipher' item on the 'Testing Practice' lesson", () => {
    it("Takes a string and a shift factor and returns it with each character 'shifted'.", () => {
        const testString = "abcde";
        const shiftFactor = 2;
        const expectedResult = "cdefg";

        expect(caesarCipher(testString, shiftFactor)).toEqual(expectedResult);
    });

    it("Should preserve case.", () => {
        const testString = "aBCcdeFGhIJk";
        const shiftFactor = 22;
        const expectedResult = "wXYyzaBCdEFg";

        expect(caesarCipher(testString, shiftFactor)).toEqual(expectedResult);
    });

    it("Should preserve non-alphabetical characters.", () => {
        const testString = "aBCzd!  alst.@";
        const shiftFactor = 7;
        const expectedResult = "hIJgk!  hsza.@";

        expect(caesarCipher(testString, shiftFactor)).toEqual(expectedResult);
    });
});

describe("Solves the 'ArrayAnalyzer' test for the 'Testing Practice' lesson", () => {
    it("Takes an array of numbers and returns an object with the following properties: average, min, max, and length", () => {
        const arr = [1, 3, 5, 7];
        const avg = 4;
        const min = 1;
        const max = 7;
        const len = 4;

        const resultObj = analyzeArray(arr);
        expect(resultObj.average).toEqual(avg);
        expect(resultObj.min).toEqual(min);
        expect(resultObj.max).toEqual(max);
        expect(resultObj.len).toEqual(len);
    })
});
