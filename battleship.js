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