var questionNumber = 0;
var timerId;
var score = 0;
var time = 100;

var questionEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// var startBtn = document.querySelector("#start-btn");
// var answerBtn = document.querySelector(".answer");
// var submitBtn = document.querySelector("#submit");
// var startEl = document.querySelector("#start");
// var quizEl = document.querySelector("#quiz");
// var endEl = document.querySelector("#end");

startBtn.addEventListener('click', function(){
    startEl.style.display = "none";
    quizEl.style.display = null;
    endEl.style.display = "none";
});

answerBtn.addEventListener("click", function(){
    startEl.style.display = "none";
    quizEl.style.display = "none";
    endEl.style.display = null;
});

submitBtn.addEventListener("click", function(){
    startEl.style.display = null;
    quizEl.style.display = "none";
    endEl.style.display = "none";
});
function startQuiz() {
    var startScreen = document.getElementById('start-screen');
    startScreen.setAttribute("class", "hide");

    questionEl.removeAttribute("class");
}
function quizEnd() {
    // stop timer
    clearInterval(timerId);

    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute('class');

    var finalScoreEl = document.getElementById("final-score");
    finalScoreEl.setAttribute("class", "hide");
}
// User clicks button to submit initials
submitBtn.onclick = saveHighscore();
// User clicks button to start quiz
startBtn.onclick = startQuiz();
// User clicks on element containing choices
choicesEl.onclick = questionClick();
function Quiz() {

}

Quiz();