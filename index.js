
/**
 * 
 * @param {string} value 
 * @returns 
 */
function capitalize(value) {
    if (!value) return "";
    return value.charAt(0).toUpperCase() + value.slice(1);
}

/**
 * 
 * @param {string} value 
 */
function reverse(value) {
    return value.split('').reverse().join('');
}

function calculator(value) {
    /**
     * 
     * @param {number} op1 
     * @param {number} op2
     * @returns {number} 
     */
    const add = function (op1, op2) {
        return op1 + op2;
    }
    /**
         * 
         * @param {number} op1 
         * @param {number} op2
         * @returns {number} 
         */
    const subtract = function (op1, op2) {
        return op1 - op2;
    }
    /**
         * 
         * @param {number} op1 
         * @param {number} op2
         * @returns {number} 
         */
    const multiply = function (op1, op2) {
        return op1 * op2;
    }
    /**
         * 
         * @param {number} op1 
         * @param {number} op2
         * @returns {number} 
         */
    const divide = function (op1, op2) {
        if (op2 == 0)
            return Infinity;
        return op1 / op2;
    }

    return { add, subtract, multiply, divide };
}
/**
 * 
 * @param {string} value 
 * @param {number} shift
 * @returns {string} 
 */
function caesarCipher(value, shift) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const arrValue = value.split('');
    const shiftedArr = arrValue.reduce((acc, cur) => {
        if (letters.includes(cur)) {
            return acc + String.fromCharCode(((cur.charCodeAt(0) + shift - "a".charCodeAt(0)) % 26) + "a".charCodeAt(0));
        }
        if (lettersUpper.includes(cur)) {
            return acc + String.fromCharCode(((cur.charCodeAt(0) + shift - "A".charCodeAt(0)) % 26) + "A".charCodeAt(0));
        }
        return acc + cur;
    }, "")
    return shiftedArr;
}

function analyzeArray(value) {

}


export { capitalize, reverse, calculator, caesarCipher, analyzeArray };