/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let map = {};

    for (let i = 0; i < names.length; i++) {
        map[heights[i]] = names[i];
    }

    heights.sort((a, b) => b - a)

    for(let i = 0; i < names.length; i++) {
        names[i] = map[heights[i]];
    }

    return names;
}