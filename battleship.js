var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class","hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class","miss");
  }
}

var model = {
  boardSize : 7,
  numShips : 3 ,
  shipLength : 3,
  shipSunk : 0,

  ships : [
    { locations: ["31","41","51"], hits: ["","",""]},
    { locations: ["14","24","34"], hits: ["","",""]},
    { locations: ["00","01","02"], hits: ["","",""]}
  ],

  fire : function(guess) {
    for (var i = 0; i< this.numShips ; i++){
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      if(index >= 0){
        ship.hits[index] = "hit";
        view.displayHit(guess);
        view.displayMessage("HIT!! Uh Oh.");
        if(this.isSunk(ship)){
          view.displayMessage("You sank my battleship!!");
          this.shipSunk++;
        }
        return true;
      }
    }
    view.displayMiss(guess);
    view.displayMessage("You Missed. HeHe!!!");
    return false;
  },
  isSunk : function(ship) {
    for (var i = 0 ; i<this.shipLength ; i++){
      if(ship.hits[i] !== "hit"){
        return false;
      }
    }
    return true;
  }
}

var controller = {
  guesses : 0,
  
  processGuess : function(guess) {
    var location = parseGuess(guess);
    if(location){
      this.guesses++;
      var hit = model.fire(location);
      if (hit && model.shipSunk === model.numShips ){
        view.displayMessage("You sank all my battleship in "+this.guesses + " guesses.");
      }
    }
  }
}

function parseGuess(guess) {
  var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

  if(guess === null || guess.length !==2) {
    alert("Oops, please enter a letter and a number on the board.");
  }
  else{
    firstChar = guess.charAt(0);
    var row = alphabet.indexOf(firstChar);
    var column = guess.charAt(1);
    if(isNaN(row) || isNaN(column) ){
      alert("Oops. Input not on board!!");
    }
    else if(row < 0 || column < 0 || row > model.boardSize || column > model.boardSize ){
      alert("Oops. Off the board that goes !!");
    }
    else {
      return row+column;
    }
    return null;
  }
}

function init() {
  var fireButton = document.getElementById("fireButton");
  fireButton.onclick = handleFireButton;
}
function handleFireButton() {
  var guessInput = document.getElementById("guessInput");
  var guess = guessInput.value;
  controller.processGuess(guess);
}
window.onload = init;

function battleship(){
    var location1 = Math.floor(Math.random()*5); 
    var location2 = Math.floor(Math.random()*5);
    var location3= Math.floor(Math.random()*5);
    var isSunk = false;
    var numHits = 0;
    var numMisses = 0;
    var numGuesses = 0;
    var guess ;

    while(!isSunk){
      guess = prompt("Ready, aim, fire! (enter a number 0-6): ");
      if(guess < 0 || guess > 6){
        alert("Please enter a valid cell number");
        continue;
      }
      else{
        numGuesses = numGuesses + 1;
        if (guess == location1 || guess == location2 || guess == location3){
          numHits = numHits + 1; 
          alert("HIT");
          if (numHits == 3) {
            isSunk = true;
            var stats = "You took "+numGuesses + " guesses to sink the battleship, " + 
            " which means your shooting accuracy was " + (3/numGuesses);
            alert(stats);
          }
        }
        else{
          alert("MISS");
          numMisses = numMisses + 1;
        }
      }
    }
}
function bark(name, weight){
    if(weight > 20){
        console.log(name+" says  WOOF WOOF");
    }
    else{
        console.log(name+" says  woof woof");
    }
}