const stopWatch = (i, options = {}) => {
  const addMessage = (message) => {
    const messageElement = document.createElement('div');
    const now = new Date();
    messageElement.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒 ${message}`;
    messageElement.classList = ['message'];
    logElement.insertAdjacentElement('afterbegin', messageElement);
  }

  const ramenTimer = (seconds) => {
    const oneMinutes = 60;
    if (seconds === oneMinutes * 3) {
      alert('ラーメンができました！');
    }
  }

  const color = options.color || 'lightblue';
  const backgroundColor = options.backgroundColor || 'black';
  const displayElement = document.getElementsByClassName('display')[i];
  displayElement.style.color = color;
  displayElement.style.backgroundColor = backgroundColor;

  const logElement = document.querySelectorAll('.log')[i];
  let timer = null;
  let seconds = 0;

  const startButton = document.getElementsByClassName('start-button')[i];
  startButton.addEventListener('click', () => {
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

  const stopButton = document.getElementsByClassName('stop-button')[i];
  stopButton.disabled = true;
  stopButton.addEventListener('click', () => {
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

const options = {
  color: 'limegreen',
  backgroundColor: '#333'
};

for (let i = 0; i < 4; i++) {
  stopWatch(i, options);
}
