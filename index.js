// Code your solution here
function findMatching(drivers, str) {
   return drivers.filter(function(name) {return  name.toLowerCase() === str.toLowerCase() })
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(function(name) {return  name.toLowerCase().startsWith(str.toLowerCase()) })
}

function matchName(drivers, str) {
    return drivers.filter(function(obj) {return  obj.name.toLowerCase() === str.toLowerCase() })
 }