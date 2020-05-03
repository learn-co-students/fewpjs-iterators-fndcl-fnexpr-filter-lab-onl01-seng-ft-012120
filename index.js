// Code your solution here
// 1) returns all drivers that match the passed in name
//returns matching drivers if case does not match but letters do
//returns an empty array if there is no match
function findMatching(array, string) {
    return array.filter(item => item.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(item => item.slice(0, string.length).toLowerCase() === string.toLowerCase())
}
function matchName(array, string) {
    return array.filter(item => item.name === string)
}
