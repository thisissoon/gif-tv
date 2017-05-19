var Rx;

$(document).ready( () => {

  const gifDiv    = document.getElementsByClassName('gif-container')[0];
  const $gifDiv   = $(gifDiv);
  let gifInfo;
  const soonGif1Info = {filename: 'SOON_Logo_v4.gif', gifDuration: 9000};
  const soonGif2Info = {filename: 'Soon_3D_v1.gif', gifDuration: 4040};
  const jackGifInfo = {filename: 'jack_gif.gif', gifDuration: 2790};

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
    return array.reduce((sum, current, index) => {
      if (index % frequency === 0) {
        sum.push(current, insertElement);
      } else {
        sum.push(current);
      }
      return sum;
    }, []);
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
      gifInfo = insertElement(gifInfo, 18, soonGif1Info);
      gifInfo = insertElement(gifInfo, 22, soonGif2Info);
      gifInfo = insertElement(gifInfo, 25, jackGifInfo);
      gifStream$.subscribe((index) => {
        updateGif($gifDiv, gifInfo[index].filename);
      });
    });

});
