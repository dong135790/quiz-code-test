var questionIndex = 0;
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
var questionEl = document.querySelector(".questions");
var answerBtn = document.querySelector("#answer-btn");
// End Section //
var endEl = document.querySelector("#end-screen");
var scoreSheetEl = document.getElementById("scoresheet");
var submitBtn = document.querySelector("#submit-btn");
// var userInfo = document.getElementById("initials").value;

var multipleChoiceEl = document.querySelector("MClist");

// Function to start quiz
function startQuiz() {
    // hides the start html.
    startEl.setAttribute('class', 'hidden');
    navEl.setAttribute('class', 'hidden');

    // Unhides the questions.
    quizEl.removeAttribute("class");

    // Displays the current question
    buildQuiz();
    

    // Start timer
}
// function buildQuiz() {
//     document.body.innerHTML = '';
//     questionIndex++;
//     document.write(questionList[questionIndex].question + "<br />");

//     for (var i=0; i < questionList[questionIndex].choices.length; i++) {
//     document.write("<input type=radio id=myRadio name=radAnswer>" + questionList[questionIndex].choices[i] + "<br />");
//     }
        
//     if (questionIndex <= (questionList.length - 1)) {
//         var nextButton = document.createElement("input");
//         nextButton.type = "button";
//         nextButton.value = "Next question";
//         nextButton.addEventListener('click', buildQuiz);
//         document.body.appendChild(nextButton);
//         console.log(questionIndex)
//         console.log(questionList.length -1);
//     } else if (questionIndex >= (questionList.length - 1)){
//         endQuiz();
//     }
// };

function buildQuiz() {
    // Set the displayed question equal to the list of objects based on the index number (currently 0)
    var displayQuestion = questionList[questionIndex];

    var questionTitleEl = document.querySelector("#question-title");
    var questionChoiceEl = document.querySelector("#question-choice");
    // Add Quiz question[i] title based on which index is currently on "displayQuestion"
    questionTitleEl.innerText = displayQuestion.question;
    // Loops though each question and appends as a button
    for (var i = 0; i < displayQuestion.choices.length; i++ ) {
        var displayChoice = displayQuestion.choices[i];
        var choiceButton = document.createElement('button');
        choiceButton.setAttribute('value', displayChoice);
        choiceButton.setAttribute('class', 'quizzy');

        choiceButton.textContent = displayChoice;
        questionChoiceEl.appendChild(choiceButton);
        console.log(displayChoice);
    if (questionIndex < questionList.length - 1) {
        choiceButton.addEventListener('click', function () {

            if (!choiceButton.value === questionList[i].correctAnswer) {
                time - 5;
            } else if (choiceButton.value === questionList[i].correctAnswer) {
                score++;
            }
            questionChoiceEl.innerHTML = '';
            questionIndex++;
            buildQuiz();
            console.log(questionIndex)
            console.log(questionList.length)
        })
    } else if (questionIndex === questionList.length -1 ) {
        choiceButton.addEventListener('click', function() {
            endQuiz();
        })
    }
    }
    // if (questionIndex === questionList.length)
}
    

// Function for quiz correct/wrong questions.
function questionStatus () {

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
function returnScreen () {
    endEl.setAttribute('class', 'hidden');

    startEl.removeAttribute('class');
    navEl.removeAttribute('class');
}
// button to begin to quiz. Once clicked, the startQuiz() will run
startBtn.onclick = startQuiz;
submitBtn.onclick = returnScreen;
