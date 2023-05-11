var questionNumber = 0;
var timerId;
var score = 0;
var time = 100;

// Timer
var navEl = document.getElementById("nav-bar");
var timerEl = document.getElementById("time");

// Start Section //
var startEl = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start-btn");
// Quiz Section //
var quizEl = document.querySelector("#quiz-screen");
// Stores the questions
var questionEl = document.querySelector(".question");
var answerBtn = document.querySelector("#answer-btn");
// End Section //
var endEl = document.querySelector("#end-screen");
var submitBtn = document.querySelector("#submit-btn");

var multipleChoiceEl = document.querySelector("MClist");

// Function to start quiz
function startQuiz() {
    // hides the start html.
    startEl.setAttribute('class', 'hidden');
    navEl.setAttribute('class', 'hidden');

    // Unhides the questions.
    quizEl.removeAttribute("class");

    // Start timer
}
multipleChoiceEl.addEventListener('click', function(event) {
    var element = event.target;
// ensure that the user is clicking on one of the MC prompts
    if (element.matches('.MC')) {

    }
})
var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (element.matches(".box")) {
    if (element.dataset.state === 'hidden') {
      element.dataset.state = 'show';
      element.textContent = element.dataset.number;
    } else {
      element.dataset.state = 'hidden';
      element.textContent = null;
    }
  }
});

// Function for quiz logic/questions.
function quizLength () {
    // Goes through iteration of questions

    // Determines correct/incorrect
        // tally points/timer and return the value
}

// Function to end quiz
function endQuiz () {
    //  Hides the quiz questions
    quizEl.setAttribute('class', 'hidden');
    

    // Unhides the end screen
    endEl.removeAttribute('class');

    // Stops timer
    // Display points
}
// button to begin to quiz. Once clicked, the startQuiz() will run
startBtn.onclick = startQuiz;
// button to stop quiz
answerBtn.onclick = endQuiz;
// var questionEl = document.getElementById("questions")
// var timerEl = document.getElementById("time");
// var choicesEl = document.getElementById("choices");
// var submitBtn = document.getElementById("submit-btn");
// var startBtn = document.getElementById("start-btn");
// var initialsEl = document.getElementById("initials");
// var feedbackEl = document.getElementById("feedback");


// function timer() {
//     var timerInterval = setInterval(function() {
//         time--;
//         if (time === 0) {
//             clearInterval(timerInterval);

//         }

//     },1000)
// }
// function startQuiz() {
//     // hides the start html.
//     var startScreen = document.getElementById('start-screen');
//     startScreen.setAttribute("class", "hide");
//     // Unhides the questions.
//     questionEl.removeAttribute("class");

//     timerId = setInterval(clockTick, 1000);


// }
// function quizEnd() {
//     // stop timer
//     clearInterval(timerId);

//     var endScreenEl = document.getElementById("end-screen");
//     endScreenEl.removeAttribute('class');

//     var finalScoreEl = document.getElementById("final-score");
//     finalScoreEl.setAttribute("class", "hide");
// }
// // User clicks button to submit initials
// // submitBtn.onclick = saveHighscore();
// // // User clicks button to start quiz
// // // User clicks on element containing choices
// // choicesEl.onclick = questionClick();