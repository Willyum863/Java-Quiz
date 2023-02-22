var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var button = document.getElementById('button');
var questionBox = document.querySelector(".questions");


var score = 0;
var timeLeft = 100;
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

    // Get questions function
var getQuestions = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[0].question + "<br />";
    questionBox.appendChild(question);

    var optionA = document.createElement("button")
    optionA.className = "answers";
    optionA.textContent = questions[0].optionA;
    question.appendChild(optionA);

    var optionB = document.createElement("button")
    optionB.className = "answers";
    optionB.textContent = questions[0].optionB;
    question.appendChild(optionB);

    var optionC = document.createElement("button")
    optionC.className = "answers";
    optionC.textContent = questions[0].optionC;
    question.appendChild(optionC);

    var optionD = document.createElement("button")
    optionD.className = "answers";
    optionD.textContent = questions[0].optionD;
    question.appendChild(optionD);

    var right = function () {
        alert("Correct! +10 points");
        score += 10;
        question.remove();
        answerOne.remove();
        answerTwo.remove();
        answerThree.remove();
        answerFour.remove();
        questionTwo();
    }

   // var wrong = function () {
   //     alert("Wrong, -5 points -5 seconds");
   //     timeLeft -= 5;
   //     score -= 5;
   //     if (score < 0) {
   //         score = 0;
   //     }
   // };

    optionA.addEventListener("click", right);
    optionB.addEventListener("click", wrong);
    optionC.addEventListener("click", wrong);
    optionD.addEventListener("click", wrong);
}

var questionTwo = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[1].question + "<br />";
    questionBox.appendChild(question);

    var optionA = document.createElement("button")
    optionA.className = "answers";
    optionA.textContent = questions[1].optionA;
    question.appendChild(optionA);

    var optionB = document.createElement("button")
    optionB.className = "answers";
    optionB.textContent = questions[1].optionB;
    question.appendChild(optionB);

    var optionC = document.createElement("button")
    optionC.className = "answers";
    optionC.textContent = questions[1].optionC;
    question.appendChild(optionC);

    var optionD = document.createElement("button")
    optionD.className = "answers";
    optionD.textContent = questions[1].optionD;
    question.appendChild(optionD);

    var right = function () {
        alert("Correct! +10 points");
        score += 10;
        question.remove();
        optionA.remove();
        optionB.remove();
        optionC.remove();
        optionD.remove();
        questionThree();
    }
    var wrong = function () {
        alert("Wrong, -5 points -5 seconds");
        timeLeft -= 5;
        score -= 5;
        if (score < 0) {
            score = 0;
        }
    };


    optionA.addEventListener("click", wrong);
    optionB.addEventListener("click", wrong);
    optionC.addEventListener("click", wrong);
    optionD.addEventListener("click", right);
}

var questionThree = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[2].question + "<br />";
    questionBox.appendChild(question);

    var optionA = document.createElement("button")
    optionA.className = "answers";
    optionA.textContent = questions[2].optionA;
    question.appendChild(optionA);

    var optionB = document.createElement("button")
    optionB.className = "answers";
    optionB.textContent = questions[2].optionB;
    question.appendChild(optionB);

    var optionC = document.createElement("button")
    optionC.className = "answers";
    optionC.textContent = questions[2].optionC;
    question.appendChild(optionC);

    var optionD = document.createElement("button")
    optionD.className = "answers";
    optionD.textContent = questions[2].optionD;
    question.appendChild(optionD);   

    var right = function () {
        alert("Correct! +10 points");
        score += 10;
        question.remove();
        optionA.remove();
        optionB.remove();
        optionC.remove();
        optionD.remove();
        questionFour();
    }
    var wrong = function () {
        alert("Wrong, -5 points -5 seconds");
        timeLeft -= 5;
        score -= 5;
        if (score < 0) {
            score = 0;
        }
    };


    optionA.addEventListener("click", wrong);
    optionB.addEventListener("click", right);
    optionC.addEventListener("click", wrong);
    optionD.addEventListener("click", wrong);
}

var questionFour = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[3].question + "<br />";
    questionBox.appendChild(question);

    var optionA = document.createElement("button")
    optionA.className = "answers";
    optionA.textContent = questions[3].optionA;
    question.appendChild(optionA);

    var optionB = document.createElement("button")
    optionB.className = "answers";
    optionB.textContent = questions[3].optionB;
    question.appendChild(optionB);

    var optionC = document.createElement("button")
    optionC.className = "answers";
    optionC.textContent = questions[3].optionC;
    question.appendChild(optionC);

    var optionD = document.createElement("button")
    optionD.className = "answers";
    optionD.textContent = questions[3].optionD;
    question.appendChild(optionD);   

    var right = function () {
        alert("Correct! +10 points");
        score += 10;
        question.remove();
        optionA.remove();
        optionB.remove();
        optionC.remove();
        optionC.remove();
        questionFive();
    }
    var wrong = function () {
        alert("Wrong, -5 points -5 seconds");
        timeLeft -= 5;
        score -= 5;
        if (score < 0) {
            score = 0;
        }
    };

    optionA.addEventListener("click", wrong);
    optionB.addEventListener("click", wrong);
    optionC.addEventListener("click", wrong);
    optionD.addEventListener("click", right);
}

var questionFive = function() {
    var question = document.createElement("h1");
    question.className = "questions";
    question.innerHTML = questions[4].question + "<br />";
    questionBox.appendChild(question);

    var optionA = document.createElement("button")
    optionA.className = "answers";
    optionA.textContent = questions[4].optionA;
    question.appendChild(optionA);

    var optionB = document.createElement("button")
    optionB.className = "answers";
    optionB.textContent = questions[4].optionB;
    question.appendChild(optionB);

    var optionC = document.createElement("button")
    optionC.className = "answers";
    optionC.textContent = questions[4].optionC;
    question.appendChild(optionC);

    var optionD = document.createElement("button")
    optionD.className = "answers";
    optionD.textContent = questions[4].optionD;
    question.appendChild(optionD);   
    
    var right = function () {
        alert("Correct! +10 points");
        score += 10;
        question.remove();
        optionA.remove();
        optionB.remove();
        optionC.remove();
        optionD.remove();
        clearInterval(timeInterval);
        final();
    }
    var wrong = function () {
        alert("Wrong, -5 points -5 seconds");
        timeLeft -= 5;
        score -= 5;
        if (score < 0) {
            score = 0;
        }
    };

    optionA.addEventListener("click", wrong);
    optionB.addEventListener("click", right);
    optionC.addEventListener("click", wrong);
    optionD.addEventListener("click", wrong);
}
getQuestions();

}

// Questions 
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