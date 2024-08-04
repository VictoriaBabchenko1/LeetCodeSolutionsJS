/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let result = [];

    function generate(start = 0, parts = []) {
        if (parts.length === 4) {
            if (start === s.length) {
                result.push(parts.join('.'));
            }
            return;
        }

        for(let i = 1; i < 4; i++) {
            if(s.length < i) break;

            let part = s.substring(start, i + start);

            if(part.length > 1 && (part[0] === '0' || parseInt(part) > 255)) {
                continue;
            }

            parts.push(part)
            generate(start + i, parts);
            parts.pop();
        }
    }

    generate()
    return result;
};