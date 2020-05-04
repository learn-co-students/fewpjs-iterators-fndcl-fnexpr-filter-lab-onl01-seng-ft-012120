// Code your solution here
function findMatching(array, string) {
    return array.filter(e => e.toLowerCase() === string.toLowerCase()
    );
};

function fuzzyMatch(array, string) {
    return array.filter(e => e[0].toLowerCase() === string[0].toLowerCase()
    );
};

function matchName(array, string) {
    return array.filter(e => e.name === string)
};