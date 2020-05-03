// Code your solution here

function findMatching(arr, name) {
   let match =  arr.filter(n => {return n.toLowerCase() == name.toLowerCase() })
    return match
}

function fuzzyMatch(arr, str) {
    let fuzz = arr.filter(n => { return n.substring(0, str.length).toUpperCase() === str.toUpperCase()})
    return fuzz
}

function matchName(arr, str) {
    let match = arr.filter(n => {return n.name === str})
    return match
}