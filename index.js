// Code your solution here
function findMatching(array,string) {
  return array.filter(n => 
     n.toLowerCase() === string.toLowerCase()
  )
}

function fuzzyMatch(array, string) {
  return array.filter(n => 
    n.toLowerCase().charAt(0) === string.toLowerCase().charAt(0)
  )
}

function matchName(array, string) {
  return array.filter(n =>
    n.name === string
    )
}