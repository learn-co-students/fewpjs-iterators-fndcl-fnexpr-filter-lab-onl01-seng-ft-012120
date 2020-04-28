// Code your solution here
function findMatching(drivers, string){
    let match = drivers.filter( n => {return n === string ||  n === string.toLowerCase()});
    return match;
}

function fuzzyMatch(drivers, string){
    let search = string.length;
    let match = drivers.filter( n => {return n.slice(0, search) === string})
    return match;
}

function matchName (drivers, string){
    let match  = drivers.filter( n => {return n.name === string});
    return match;
}