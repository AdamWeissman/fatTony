const fetch = require('node-fetch');

const theShipment = [
  { sampleBot: "https://s0crates.herokuapp.com/sampleBot/chatAPI"}, 
  { ghostWriter: "https://s0crates.herokuapp.com/gh0stwr1ter/chatAPI"}] 

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
  return Promise.all(warehouse)
}

function tonysApprenticeCatalogs(theShat, thePackages){
  const theBookiesLedger = {}
  for (let i = 0; i < theShat.length; i++){
    theBookiesLedger[Object.keys(thePackages[i])] = theShat[i]
  }
  return theBookiesLedger
}

function fatTony(dahShipment, theMainAttraction) {
  theCouriersDeliver(dahShipment)
    .then(everyShadyPackage => tonysApprenticeCatalogs(everyShadyPackage, dahShipment))
    .then(theMainAttraction)
}

function theMainAttraction(theLedger){
  //YOU CAN NOW MUTATE DATA AS IF IT WERE A REGULAR VARIABLE!!!
  const localLedger = theLedger
  console.log(localLedger)
  localLedger["sampleBot"].theeResponseObject[0] = "I CHANGED TO THIS"  
  console.log(localLedger)
  console.log("WRITE THE REST OF YOUR PROGRAM IN HERE")
}

//RUN YOUR PROGRAM LIKE SO: 
fatTony(theShipment, theMainAttraction)
