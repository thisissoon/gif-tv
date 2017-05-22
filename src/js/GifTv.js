function GifTv(config){

  this.regularGifs = config.regularGifInfo;
  this.gifElement = config.targetElement;
  this.gifInfoArray = config.gifInfoArray;
  const _this = this;

  function gifLoop (observer, index) {
    observer.next(index);
    setTimeout(() => {
      if (index < _this.gifInfoArray.length -1) {
        gifLoop(observer, ++index);
      } else {
        gifLoop(observer, 0);
      }
    }, Math.max(_this.gifInfoArray[index].gifDuration * 3, 5000));
  }

  function suffleArray(array) {
    for (let i = array.length; i; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      [array[i - 1], array[randomIndex]] = [array[randomIndex], array[i - 1]];
    }
  }

  function insertDurations(gifInfoArray, regularGifs){
    return regularGifs.map((gif) => {
      var duration;
      for (const gifInfo of gifInfoArray) {
        if (gifInfo.filename === gif.filename) {
          duration = gifInfo.gifDuration;
        }
      }
      return {
        filename: gif.filename,
        gifDuration: duration,
        frequency: gif.frequency
      };
    });
  }

  function insertRegularGifs(gifInfoArray, regularGifs){
    for (const regularGif of regularGifs) {
      gifInfoArray = insertElement(gifInfoArray, regularGif.frequency, {filename: regularGif.filename, gifDuration: regularGif.gifDuration});
    }
    return gifInfoArray;
  }

  function insertElement(array, frequency, insertElement){
    return array.reduce((acc, current, index) => {
      if (index % frequency === 0) {
        acc.push(current,insertElement);
        return acc;
      } else {
        acc.push(current);
        return acc;
      }
    }, []);
  }

  function updateGif(element, gifFilename) {
    element.setAttribute('style', `background-image: url(./assets/GIFS/${gifFilename})`);
  }

  this.init = function(){
    this.gifStream$ = Rx.Observable.create(observer => {
      gifLoop(observer, 0);
    });
    suffleArray(this.gifInfoArray);
    this.regularGifs = insertDurations(this.gifInfoArray, this.regularGifs);
    this.gifInfoArray = insertRegularGifs(this.gifInfoArray, this.regularGifs);
    this.gifStream$.subscribe((index) => {
      updateGif(this.gifElement, this.gifInfoArray[index].filename);
    });
  };
  
}