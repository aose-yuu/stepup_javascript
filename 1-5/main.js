function stopWatch(options) {
  function addMessage(message) {
    var messageElement = document.createElement('div');
    var now = new Date();
    messageElement.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒 ' + message;
    messageElement.classList = ['message'];
    logElement.insertAdjacentElement('afterbegin', messageElement);
  }

  options = options || {};
  var color = options.color || 'lightblue';
  var backgroundColor = options.backgroundColor || 'black';
  var displayElement = document.getElementsByClassName('display')[0];
  displayElement.style.color = color;
  displayElement.style.backgroundColor = backgroundColor;

  var logElement = document.querySelector('.log');
  var timer = null;
  var seconds = 0;

  var startButton = document.getElementsByClassName('start-button')[0];
  startButton.addEventListener('click', function() {
    startButton.disabled = true;
    stopButton.disabled = false;
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
  stopButton.disabled = true;
  stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      seconds = 0;
      displayElement.innerText = seconds;
      addMessage('終了')
    }
  });
}

var options = {
  color: 'limegreen',
  backgroundColor: '#333'
};
stopWatch(options);
