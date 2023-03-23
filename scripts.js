var score = 0;
var upgrade = 1;
var cost = 10;

let red = 0;
let green = 0;
let blue = 0;

let size = 200;

    var clicker = document.getElementById("button");
    var scoreDisplay = document.getElementById("score");
    var upbutton = document.getElementById("button1");

    clicker.addEventListener("click", function() {
      score += upgrade;
      scoreDisplay.innerText = score;

      red = getRandomInt(256);
      green = getRandomInt(256);
      blue = getRandomInt(256);

      let rgbCode = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";
    
      document.getElementById("button").style.backgroundColor = rgbCode;

      size -= 5;

      clicker.style.width=size.toString() + "px";
      clicker.style.height = size.toString() + "px";

      if(size <= 5){
        score = "You won!";
      }
    });

    upbutton.addEventListener("click", function() {
      if(score >= cost) {
        upgrade += 2;
        score -= cost;
        cost += 1;
        scoreDisplay.innerText = score;
      }
    })
    
    function getRandomInt(max){
      return Math.floor(Math.random() * max);
    }
