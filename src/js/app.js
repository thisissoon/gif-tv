var Rx;

$(document).ready( () => {

  const gifDiv    = document.getElementsByClassName('gif-container')[0];
  const $gifDiv   = $(gifDiv);
  let gifInfo;
  const soonGifInfo = {filename: 'SOON_Logo_v2.gif', gifDuration: 9000};

  $gifDiv.on('click', (e) => {
    gifDiv.webkitRequestFullscreen();
  });

  function updateGif($element, gifFilename) {
    $element.css('background-image', `url(./assets/PARTY_GIFS/${gifFilename})`);
  }

  function suffleArray(array) {
    for (let i = array.length; i; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      [array[i - 1], array[randomIndex]] = [array[randomIndex], array[i - 1]];
    }
  }

  function insertElement(array, frequency, insertElement){
    return array.map((element, index) => {
      if (index % frequency === 0) {
        return element, insertElement;
      } else {
        return element;
      }
    });
  }

  function gifLoop (observer, index) {
    observer.next(index);
    setTimeout(() => {
      if (index < gifInfo.length -1) {
        gifLoop(observer, ++index);
      } else {
        gifLoop(observer, 0);
      }
    }, Math.max(gifInfo[index].gifDuration * 3, 5000));
  }

  const gifStream$ = Rx.Observable.create(observer => {
    gifLoop(observer, 0);
  });

  $.ajax({
    method: 'GET',
    url: './gifInfo'
  })
    .done(data => {
      gifInfo = data.gifInfo;
      suffleArray(gifInfo);
      gifInfo = insertElement(gifInfo, 20, soonGifInfo);
      console.log(gifInfo);
      gifStream$.subscribe((index) => {
        updateGif($gifDiv, gifInfo[index].filename);
      });
    });

});
