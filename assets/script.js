var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var button = document.getElementById('button');

var score = 0;
var timeLeft = 5;
var startQuiz = function(){
mainEl.remove();
button.remove();
    // Timer function
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining to complete Quiz';
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining to complete Quiz';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        clearInterval(timeInterval);
        timerEl.textContent = 'Time Up!';

      }
    }, 1000);
}

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        optionA: "<script>", // correct
        optionB: "<js>",
        optionC: "<javascript>",
        optionD: "<scripting>"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        optionA: "msgBox('Hello World')",
        optionB: "alertBox('Hello World')",
        optionC: "msg('Hello World')",
        optionD: "alert('Hello World')" //correct
    },
    {
        question: "How does a FOR loop start?",
        optionA: "for i = 1 to 5",
        optionB: "for(i=0;i <= 5;i++)", //correct
        optionC: "for(i = 0;i <= 5)",
        optionD: "for(i <= 5; i++)"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        optionA: "onmouseover",
        optionB: "onmouseclick",
        optionC: "onchange",
        optionD: "onclick"  //correct
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        optionA: "-",
        optionB: "=", //correct
        optionC: "X",
        optionD: "*"
    },
]

button.addEventListener("click", startQuiz);