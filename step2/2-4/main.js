class StopWatch {
  constructor(i, options = {}) {
    this.i = i;
    this.options = options;
  }

  init() {
    let {color, backgroundColor} = options;

    color = color || 'lightblue';
    backgroundColor = backgroundColor || 'black';

    const displayElement = document.getElementsByClassName('display')[this.i];
    displayElement.style.color = color;
    displayElement.style.backgroundColor = backgroundColor;

    this.logElement = document.querySelectorAll('.log')[this.i];

    let timer = null;
    let seconds = 0;

    const startButton = document.getElementsByClassName('start-button')[this.i];
    startButton.addEventListener('click', () => {
      startButton.disabled = true;
      stopButton.disabled = false;

      if (timer === null) {
        console.log(this.i + ': start');
        const that = this;
        timer = setInterval(function() {
          seconds++;
          displayElement.innerText = seconds;
          that.ramenTimer(seconds);
          console.log(that.i + ': ' + seconds);
        }, 1000);
        this.addMessage('開始');
      }
    });

    const stopButton = document.getElementsByClassName('stop-button')[this.i];
    stopButton.disabled = true;
    stopButton.addEventListener('click', () => {
      startButton.disabled = false;
      stopButton.disabled = true;

      if (timer !== null) {
        clearInterval(timer);
        timer = null;
        seconds = 0;
        displayElement.innerText = seconds;
        this.addMessage('終了');
      }
    });
  }

  addMessage(message) {
    const messageElement = document.createElement('div');
    const now = new Date();
    messageElement.innerText = `${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒 ${message}`;
    messageElement.classList = ['message'];
    this.logElement.insertAdjacentElement('afterbegin', messageElement);
  }

  ramenTimer(seconds) {
    const oneMinutes = 60;
    if (seconds === oneMinutes * 3) {
      alert('ラーメンができました！');
    }
  }
}

const options = {
  color: 'limegreen',
  backgroundColor: '#333'
};


for (let i = 0; i < 4; i++) {
  const stopWatch = new StopWatch(i, options);
  stopWatch.init();
}
