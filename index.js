// Code your solution here
function findMatching(drivers,string){
let driver = drivers.filter(function(driver){
return driver.toLowerCase() === string.toLowerCase()
    
});

return driver
};

function fuzzyMatch(drivers,string){
    return drivers.filter(driv=> {
      driv.toLowerCase().charAt(0) === string;
    }); 
  }