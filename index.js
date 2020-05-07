
function findMatching(drivers, string) {
    let found = []
    drivers.filter(driver => {
       if (driver.toLowerCase() == string.toLowerCase())
            found.push(driver)
    })
    return found
}

function fuzzyMatch(drivers, string) {
    let found = []
    drivers.filter(driver => {
       if (driver[0].toLowerCase() == string[0].toLowerCase() && driver[1].toLowerCase() == string[1].toLowerCase() )
            found.push(driver)
    })
    return found
}

function matchName(drivers, string) {
    let found = []
    drivers.filter(driver => {
       if (driver.name.toLowerCase() == string.toLowerCase())
            found.push(driver)
    })
    return found
}