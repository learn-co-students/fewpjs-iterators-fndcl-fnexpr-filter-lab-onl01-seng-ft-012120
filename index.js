// Code your solution here
const findMatching = (arr, str) => {
    return arr.filter( e => { return e.toUpperCase() === str.toUpperCase()})
}

const fuzzyMatch = (arr, str) => {
    return arr.filter( e => { return e.substring(0, str.length).toUpperCase() === str.toUpperCase()})
}

const matchName = (arr, str) => {
    return arr.filter( e=> { return e.name.toUpperCase() === str.toUpperCase()})
}