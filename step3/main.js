class PhotoViewer {
  constructor(rootElement, images) {
    this.rootElement = rootElement;
    this.images = images;
    this.currentIndex = 0;
  }

  init() {
    const prevButtonElement = this.rootElement.querySelector('.prevButton');
    prevButtonElement.addEventListener('click', () => {
      this.prev();
    });
    const nextButtonElement = this.rootElement.querySelector('.nextButton');
    nextButtonElement.addEventListener('click', () => {
      this.next();
    });

    this.updatePhoto();
  }

  updatePhoto() {
    const frameElement = this.rootElement.querySelector('.frame');
    const image = this.images[this.currentIndex];
    const imageIndex = this.currentIndex + 1;

    frameElement.innerHTML = `
      <div class="currentImage">
      <p>${imageIndex}枚目</p>
        <img src="${image}" alt="image">
      </div>
    `;
    console.log(imageIndex);
    this.startTimer();
  }

  prev() {
    this.currentIndex += 2;
    this.currentIndex = this.currentIndex % this.images.length;
    this.updatePhoto();
  }

  next() {
    this.currentIndex++;
    this.currentIndex = this.currentIndex % this.images.length;
    this.updatePhoto();
  }

  startTimer() {
    if (this.timerKey) {
      clearTimeout(this.timerKey);
    }

    this.timerKey = setTimeout(() => {
      this.next();
    }, 4000);
  }
}


const images = [
  'https://fakeimg.pl/250x150/81DAF5',
  'https://fakeimg.pl/250x150/F781F3',
  'https://fakeimg.pl/250x150/81F7D8'
];

new PhotoViewer(document.getElementById('photoViewer'), images).init();
