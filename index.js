// Code your solution here

function findMatching(array, str) {
  return array.filter(element => {return element.toLowerCase() === str.toLowerCase();});
}

function fuzzyMatch(array, str) {
  return array.filter(element => {return element.toLowerCase().indexOf(str.toLowerCase()) === 0});
}

function matchName(array, str) {
  return array.filter(element => {return element.name === str});
}