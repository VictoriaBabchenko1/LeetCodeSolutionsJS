/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    return reversed >= Math.pow(-2, 31) && reversed <= Math.pow(2, 31) - 1 ? reversed : 0;
};

console.log(reverse(-123));