function GifTv(config){

  // Settings to be used throughout object
  // regularGifs = gifs which want to be repeated more often.
  this.regularGifs = config.regularGifsInfo || [];
  this.gifElement = config.targetElement;
  this.gifInfoArray = config.gifInfoArray;
  const _this = this;

  // Recurssive function which outputs an incremented index
  // into the Rx.Observable stream after the gif related to the previous
  // index has ran it's duration 3 times.
  // If the index is equal to the length of the gifInfo array 
  // the index is reset to zero so the gifs never stop!
  // Math.max used to cover for any bad duration data.
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

  // Function to allow random order of gifs.
  function suffleArray(array) {
    for (let i = array.length; i; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      [array[i - 1], array[randomIndex]] = [array[randomIndex], array[i - 1]];
    }
  }

  // Each regularGifs duration is found from the gifInfoArray
  // and bound to the regularGif object.
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

  // Each gif from the regularGif array is inserted uniformly into the gifInfoArray
  // according to the specified frequency.
  function insertRegularGifs(gifInfoArray, regularGifs){
    for (const regularGif of regularGifs) {
      gifInfoArray = insertElement(gifInfoArray, regularGif.frequency, {filename: regularGif.filename, gifDuration: regularGif.gifDuration});
    }
    return gifInfoArray;
  }

  // Every x times the insertElement is inserted alongside the already
  // present current element.
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

  // When a new value is outputed from the RxJS Observable stream
  // the specified DOM element's background image is updated to the next gif.
  function updateGif(element, gifFilename) {
    element.setAttribute('style', `background-image: url(./assets/GIFS/${gifFilename})`);
  }

  // On Initialisation the stream is created via the recursive gifLoop function.
  // The regular gifs recieve their correct durations and are inserted 
  // uniformley into the gifInfoArray.
  // The Rx.Observable stream is subscrbed to, on each new index
  // the DOM element is updated with the appropriate gif background.
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