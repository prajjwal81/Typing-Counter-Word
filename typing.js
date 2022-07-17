window.addEventListener("load", int);
// Array of Words
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "defintion",
];

let runningWords = document.getElementById("words");
let inputword = document.getElementById("input");
let timeLeft = document.getElementById("time");
let ans = document.getElementById("ans");
let scoreDislay = document.getElementById("score");
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let difficult = document.getElementById("difficult");
let score = 0;
let t = -1;
let currentLevel;

function int() {
  showWords(words);
  matchword();
  setInterval(time, 1000);
  setInterval(gameover, 50);
}

function showWords(words) {
  let rndIdx = Math.floor(Math.random() * words.length);
  runningWords.innerHTML = words[rndIdx];
}
function matchword() {
  inputword.addEventListener("input", function () {
    // console.log(inputword.value)
    if (matchValue()) {
      showWords(words);

      inputword.value = "";
      ans.innerHTML = "";
      score++;
      console.log(score);

      t = currentLevel;
    }
    scoreDislay.innerHTML = score;
  });
}
function matchValue() {
  if (inputword.value == runningWords.innerHTML) {
    ans.innerHTML = "correct";
    return true;
  } else {
    return false;
  }
}
function optEasy() {
  easy.addEventListener("click", function () {
    t = "6";
    currentLevel = t;
    return true;
  });
}
function Optmedium() {
  medium.addEventListener("click", function () {
    t = "5";
    currentLevel = t;
    return true;
  });
}
function optDifficult() {
  difficult.addEventListener("click", function () {
    t = "4";
    currentLevel = t;
    return true;
  });
}

function time() {
  if (t == 0) {
    score--;
    showWords(words);
    scoreDislay.innerHTML = score;
    t--;
  }
  if ((optEasy(), t > 0)) {
    t--;
  } else if ((Optmedium(), t > 0)) {
    t--;
  } else if ((optDifficult(), t > 0)) {
    t--;
  }

  timeLeft.innerHTML = t == -1 ? "0" : t;
}
function gameover() {
  // console.log(t)
  if (t == 0) {
    alert("game over");
    runningWords.innerHTML = "GameOver😂😂";
    t--;
    inputword.value = "";
    inputword.disabled = true;

    let inputLocal = JSON.parse(localStorage.getItem("inputLocal"));
    if (inputLocal == null) {
          score;
    }
    localStorage.setItem("inputLocal", JSON.stringify(score));
  }
}








































// let inputlocal = (localStorage.getItem('inputlocal'))
//    let notesObj;
//    console.log(inputlocal)
// if (inputlocal == null) {
//     console.log("hi")
//     notesObj = score
//     localStorage.setItem('inputlocal', JSON.stringify(notesObj))
// }
// else {

//     if(+inputlocal < +score){
//         localStorage.setItem('inputlocal', JSON.stringify(score))
//     }

// }