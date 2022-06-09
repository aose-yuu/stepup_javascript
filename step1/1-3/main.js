var displayElement = document.getElementsByClassName('display')[0];
var timer = null;

var startButton = document.getElementsByClassName('start-button')[0];
startButton.addEventListener('click', function() {
  if (timer === null) {
    console.log('start');
    var seconds = 0;
    timer = setInterval(function() {
      seconds++;
      displayElement.innerText = seconds;
      console.log(seconds);
    }, 1000);
  }
});

var stopButton = document.getElementsByClassName('stop-button')[0];
stopButton.addEventListener('click', function() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
});
