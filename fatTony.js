const fetch = require('node-fetch');

"use strict"

function makeTheDrop (url) {
    return fetch(url)
      .then(data => data.json())
      .then(data => {return data})
}

function theCouriersDeliver(dahShipment) {
  const warehouse = [];
  dahShipment.forEach((shadyPackage) => { 
    warehouse.push(makeTheDrop(...Object.values(shadyPackage)))
  });
  return Promise.all(warehouse) // FAT TONY SAYS: "DONT MAKE NO PROMISES YOU CAN'T KEEP"
}

function tonysApprenticeCatalogs(allShadyPackages, dahShipment){
  const theBookiesLedger = {}
  for (let i = 0; i < allShadyPackages.length; i++){
    theBookiesLedger[Object.keys(dahShipment[i])] = allShadyPackages[i]
  }
  return theBookiesLedger
}

function fatTony(dahShipment, theMainAttraction) {
  theCouriersDeliver(dahShipment)
    .then(everyShadyPackage => tonysApprenticeCatalogs(everyShadyPackage, dahShipment))
    .then(theMainAttraction)
}

//===============CODE ABOVE HERE IS WHAT FAT TONY NEEDS TO RUN===============

//===============CODE BELOW HERE IS WHAT YOU  NEED IN ORDER TO RUN ==========

function theMainAttraction(theLedger){ // THIS IS YOUR MAIN LOOP
  //YOU CAN NOW MUTATE DATA AS IF IT WERE A REGULAR VARIABLE!!!
  const localLedger = theLedger
  console.log("\n\n")
  console.log("FIRST RUN", localLedger)
  console.log("\n\n")
  localLedger["sampleBot"].theeResponseObject[0] = "I CHANGED TO THIS"  
  localLedger["sampleBot"].theeResponseObject[1] = "I CHANGED THIS, TOO"
  console.log("THIS IS THE ARRAY", localLedger["sampleBot"].theeResponseObject[6])
  localLedger["sampleBot"].theeResponseObject[6] = localLedger["sampleBot"].theeResponseObject[6].map((x) => {return x.toUpperCase()})
  console.log("THIS IS THE ARRAY CHANGED", localLedger["sampleBot"].theeResponseObject[6])
  console.log("\n\n")
  console.log("SECOND RUN AFTER ALTERED DATA", localLedger)
  console.log("\n\n")
  // WRITE THE REST OF YOUR PROGRAM INSIDE THE MAIN ATTRACTION, OR WHATEVER YOU WANT TO CALL IT
}

const theShipment = [
  { sampleBot: "https://s0crates.herokuapp.com/sampleBot/chatAPI"}, 
  { ghostWriter: "https://s0crates.herokuapp.com/gh0stwr1ter/chatAPI"}] 

//RUN YOUR PROGRAM LIKE SO: 
fatTony(theShipment, theMainAttraction)
