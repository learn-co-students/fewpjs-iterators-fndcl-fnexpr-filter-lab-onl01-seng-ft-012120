// Code your solution here
function findMatching(drivers,string){
let driver = drivers.filter(function(driver){
return driver.toLowerCase() === string.toLowerCase()
    
});

return driver
};

function fuzzyMatch(drivers,string){

return drivers.filter(driv => {
//   console.log("ourDriver",driv);
    return  driv.toLowerCase().indexOf(string.toLowerCase()) === 0 
     
})
}

    function matchName(drivers,string){
    return  drivers.filter(eachDriver => {
     if(eachDriver.name.toLowerCase() === string.toLowerCase()){
      return ("matchElement",eachDriver.name);
     }
         
     })
     



    }