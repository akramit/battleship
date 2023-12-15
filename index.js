
function displayMessage() {
    const now = new Date();
    const curr_hours = now.getHours();
    const curr_mins = now.getMinutes();
    console.log(curr_hours);
    let greeting = "";
    if(curr_hours < 12){
        greeting = "Morning";
    }
    else{
        greeting = "Evening";
    }
    document.write("Whoa!!!<br>")

    alert('Hello, Amit!! Good '+greeting);
  }

  function generateCheckboxes(){
    let checkboxesHTML = '';
      for (let i = 1; i <= numberOfCheckboxes; i++) {
        checkboxesHTML += `<input type="checkbox" id="checkbox${i}" name="checkbox${i}">
                           <label for="checkbox${i}">Checkbox ${i}</label><br>`;
      }
  }

  function displayCheckboxResult(){

  }

  function countBeers(){
    var word = "bottles";
    var count = 99;
    while(count > 0){
        console.log(count+" "+word + " beer on the wall" );
        console.log(count+" "+word+" of beer,");
        console.log("Take one down, pass it around,");
        count = count -1;
        if(count > 0){
            console.log(count+" "+word+" of beer on the wall.");
        
        }else {
            console.log("No more "+word + " beer on the wall.");
        }
    }
  }

  function sinkMyBattleship(){
    var location1 = 2; 
    var location2 = 3;
    var location3= 5;
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
          if (numHits == 3) {
            isSunk = true;
            alert("You sank my battleship! Total Guesses - "+numGuesses + " Total Misses - "+numMisses);
            numHits=0;
            numMisses = 0 ;
            numGuesses = 0 ;
            break;
          }
        }
        else{
          numMisses = numMisses + 1;
        }
      }
    }
  }