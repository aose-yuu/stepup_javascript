function stopWatch(i, options) {
  function addMessage(message) {
    var messageElement = document.createElement('div');
    var now = new Date();
    messageElement.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒 ' + message;
    messageElement.classList = ['message'];
    logElement.insertAdjacentElement('afterbegin', messageElement);
  }

  function ramenTimer(seconds) {
    oneMinutes = 60;
    if (seconds === oneMinutes * 3) {
      alert('ラーメンができました！');
    }
  }

  options = options || {};
  var color = options.color || 'lightblue';
  var backgroundColor = options.backgroundColor || 'black';
  var displayElement = document.getElementsByClassName('display')[i];
  displayElement.style.color = color;
  displayElement.style.backgroundColor = backgroundColor;

  var logElement = document.querySelectorAll('.log')[i];
  var timer = null;
  var seconds = 0;

  var startButton = document.getElementsByClassName('start-button')[i];
  startButton.addEventListener('click', function() {
    startButton.disabled = true;
    stopButton.disabled = false;
    if (timer === null) {
      console.log(i + ': start');
      timer = setInterval(function() {
        seconds++;
        displayElement.innerText = seconds;
        ramenTimer(seconds);
        console.log(i + ': ' + seconds);
      }, 1000);

      addMessage('開始');
    }
  });

  var stopButton = document.getElementsByClassName('stop-button')[i];
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

for (var i = 0; i < 4; i++) {
  stopWatch(i, options);
}
