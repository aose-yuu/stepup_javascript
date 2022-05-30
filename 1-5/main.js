function stopWatch() {
  function addMessage(message) {
    var messageElement = document.createElement('div');
    var now = new Date();
    messageElement.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒 ' + message;
    messageElement.classList = ['message'];
    logElement.appendChild(messageElement);
  }

  var displayElement = document.getElementsByClassName('display')[0];
  var logElement = document.querySelector('.log');
  var timer = null;
  var seconds = 0;

  var startButton = document.getElementsByClassName('start-button')[0];
  startButton.addEventListener('click', function() {
    if (timer === null) {
      console.log('start');
      timer = setInterval(function() {
        seconds++;
        displayElement.innerText = seconds;
        console.log(seconds);
      }, 1000);

      addMessage('開始');
    }
  });

  var stopButton = document.getElementsByClassName('stop-button')[0];
  stopButton.addEventListener('click', function() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      seconds = 0;
      displayElement.innerText = seconds;
      addMessage('終了')
    }
  });
}

stopWatch();
