var Rx;

$(document).ready( () => {

  const gifDiv    = document.getElementsByClassName('gif-container')[0];
  const $gifDiv   = $(gifDiv);
  let gifInfo;

  $gifDiv.on('click', (e) => {
    gifDiv.webkitRequestFullscreen();
  });

  function updateGif($element, gifFilename) {
    $element.css('background-image', `url(./assets/PARTY_GIFS/${gifFilename})`);
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
      gifStream$.subscribe((index) => {
        updateGif($gifDiv, gifInfo[index].filename);
      });
    });

});