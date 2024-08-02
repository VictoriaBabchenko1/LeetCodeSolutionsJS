/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // let stack = [];
    // for(let char of s) {
    //     if(char === '(') {
    //         stack.push(')');
    //     }
    //     else if (char === '{') {
    //         stack.push('}');
    //     }
    //     else if (char === '[') {
    //         stack.push(']');
    //     }
    //     else if (char !== stack.pop()) {
    //         return false;
    //     }
    // }
    // return stack.length === 0;

    while (s.includes("()") || s.includes("{}") || s.includes("[]")){
        s = s.replace("()", "")
            .replace("{}", "")
            .replace("[]", "");
    }

    return s.length === 0;
};