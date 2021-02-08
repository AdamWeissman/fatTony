const fetch = require('node-fetch');

"use strict"

function theFattestTony() {

  function makeTheDrop(url) {
    return fetch(url)
      .then(data => data.json())
      .then(data => { return data })
  }

  function theCouriersDeliver(dahShipment) {
    const warehouse = [];
    dahShipment.forEach((shadyPackage) => {
      warehouse.push(makeTheDrop(...Object.values(shadyPackage)))
    });
    return Promise.all(warehouse) // FAT TONY SAYS: "DONT MAKE NO PROMISES YOU CAN'T KEEP"
  }

  function consigliereTomProcesses(allShadyPackages, dahShipment) {
    const theBookiesLedger = {}
    for (let i = 0; i < allShadyPackages.length; i++) {
      theBookiesLedger[Object.keys(dahShipment[i])] = allShadyPackages[i]
    }
    return theBookiesLedger
  }

  function fatTony(dahShipment, theMainAttraction) {
    theCouriersDeliver(dahShipment)
      .then(everyShadyPackage => consigliereTomProcesses(everyShadyPackage, dahShipment))
      .then(theMainAttraction)
  }

  return fatTony // BADDABING!

}



//===============CODE ABOVE HERE IS WHAT FAT TONY NEEDS TO RUN===============

//===============CODE BELOW HERE IS WHAT YOU  NEED IN ORDER TO RUN ==========

function theMainAttraction(theLedger) { // THIS IS YOUR MAIN LOOP
  //YOU CAN NOW MUTATE DATA AS IF IT WERE A REGULAR VARIABLE!!!
  const localLedger = theLedger
  console.log("\n\n")
  console.log("...... THE FIRST RUN\n", localLedger)
  console.log("\n")
  localLedger["sampleBot"].theeResponseObject[0] = "I CHANGED TO THIS"
  localLedger["sampleBot"].theeResponseObject[1] = "I CHANGED THIS, TOO"
  console.log("THIS IS THE ARRAY", localLedger["sampleBot"].theeResponseObject[6])
  localLedger["sampleBot"].theeResponseObject[6] = localLedger["sampleBot"].theeResponseObject[6].map((x) => { return x.toUpperCase() })
  console.log("THIS IS THE ARRAY CHANGED", localLedger["sampleBot"].theeResponseObject[6])
  console.log("\n")
  console.log("...... THE SECOND RUN AFTER ALTERED DATA\n", localLedger)
  console.log("\n\n")

  // YOU CAN ALSO CREATE A SUB-ROUTINE 
  function sideShow(decks) {
    console.log("WELCOME TO THE SIDEHOW")
    console.log("THIS IS DECK 1 REQUEST", decks["deck1"])
    console.log("THIS IS DECK 2 REQUEST", decks["deck2"])
    console.log("THIS IS DECK 3 REQUEST", decks["deck3"]) 
    console.log("BUT WE ALSO THE LOCAL LEDGER FROM ONE LEVEL UP!!")
    console.log("THE LOCAL LEDGER", localLedger)  
  }

  let junior = theFattestTony()
  let juniorsShipment = [
    { deck1: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"},
    { deck2: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"},
    { deck3: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"}
  ]

  junior(juniorsShipment, sideShow)
  
  // IN OTHER WORDS...
  // WRITE THE REST OF YOUR PROGRAM INSIDE THE MAIN ATTRACTION, OR WHATEVER YOU WANT TO CALL IT
}


const theShipment = [
  { sampleBot: "https://s0crates.herokuapp.com/sampleBot/chatAPI" },
  { ghostWriter: "https://s0crates.herokuapp.com/gh0stwr1ter/chatAPI" }]

//RUN YOUR PROGRAM LIKE SO: 
let antonio = theFattestTony()
antonio(theShipment, theMainAttraction)
