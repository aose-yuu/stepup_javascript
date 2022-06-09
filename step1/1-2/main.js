var displayElement = document.getElementsByClassName('display')[0];
var startButton = document.getElementsByClassName('start-button')[0];
startButton.addEventListener('click', function() {
  console.log('start');
  var seconds = 0;
  setInterval(function() {
    seconds++;
    displayElement.innerText = seconds;
    console.log(seconds);
  }, 1000);
});
