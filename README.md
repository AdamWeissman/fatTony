# What is Fat Tony?

*The name is inspired by Tony Soprano for his "break the rules" approach, and also "Fat Tony" a recurring character in the works of Nassim Nicholas Taleb who embodies street smarts and thrift.*

The problem Fat Tony aims to solve is that when working with JavaScript it feels like a drag to pollute your codebase with lots of `thens` or import some crazy library or npm package (especially if what you REAAALLY want to do is grab the data from a fetch -- ONCE -- and then mutate it 6 ways from Sunday)!

While Fat Tony isn't a solution for every situation, **it enables you to capture data from a fetch essentially as a one off, so you can then work on it in your codebase, almost as if it were a regular variable.**  Granted, you need to write you code inside of a function which you pass to your declared invocation of `theFattestTony` but if you're prototyping something, and don't want to deal with the baggage of writing lots of functions when you aren't exactly sure what you'll need, or not -- then Fat Tony helps provide you with enough support to get you running quickly... as for `then`, Fat Tony works with it behind the scenes, but hopefully in a way that's unobtrusive enough to feel like an afterthought.

---

As Tony Soprano might say: *"The dog not only fetches, but it STAYS."*

## EXAMPLE OF HOW TO USE FAT TONY

AFTER YOU NPM INIT YOUR PROJECT... make sure to include the following line at the top of the file you intend to use Fat Tony in...

```
const { theFattestTony } = require("fat-tony");
```

### YOU NEED A SHIPMENT...
```
const theShipment = [
  { keyForFetch1: "url_for_fetch1" },
  { keyForFetch2: "url_for_fetch2" },
  { keyForFetch3: "url_for_fetch3"}
]
```

### YOU NEED A PROGRAM TO RUN IT ALL IN
```
function runMyProgram(receivesAnObjectWithTheResultsFromTheShipment) {
  const variableForLocalUse = receivesAnObjectWithTheResultsFromTheShipment 
  const accessForResultOfFetch1 = variableForLocalUse["keyForFetch1"]
  const accessForResultOfFetch2 = variableForLocalUse["keyForFetch2"]
  const accessForResultOfFetch3 = variableForLocalUse["keyForFetch3"]

  // you don't have to do it like that...
  // but you can now write your code in such a way that you can treat the
  // results of the fetch almost like local variables
  // you can also nest this logic
}
```

### THIS IS WHERE THE MAGIC HAPPENS
```
let myFatTony = fatTony //required from the package
myFatTony(theShipment, runMyProgram)
```

### YOU CAN ALSO CUT AND PAST THE FOLLOWING CODE FOR A COMPLETE TESTING EXPERIENCE!
```
const { theFattestTony } = require("fat-tony");

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

```

