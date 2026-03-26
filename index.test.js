import { describe, expect, test } from '@jest/globals';
import { capitalize } from '.';

describe("Make the tests for the 'Testing Practice' lesson", () => {
    const capitalizeTestCases = [{ value: "umaString", expected: "UmaString" }, { value: "OutraString", expected: "OutraString" }, { value: "", expected: "" }]
    test.each(capitalizeTestCases)("Takes a string and returns it with the first character capitalized.", (s) => {
        const valueToTest = capitalize(s.value);
        expect(s.expected).toEqual(valueToTest);
    })

    const reverseTestCases = [{ value: "abcde", expected: "edcba" }, { value: "ava", expected: "ava" }, { value: "", expected: "" }]
    test.each(reverseTestCases)("Takes a string and returns it reversed.", (s) => {
        expect(s.expected).toEqual(s.value);
    })
})