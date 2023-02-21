var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

// Timer function
function countdown() {
    var timeLeft = 5;

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
        timerEl.textContent = 'Time Up!';
      }
    }, 1000);
  }
    countdown();

