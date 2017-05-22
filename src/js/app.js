document.addEventListener('DOMContentLoaded', () => {

  const gifElement    = document.getElementsByClassName('gif-container')[0];
  const regularGifInfo = [
    {
      filename: 'SOON_Logo_v2.gif',
      frequency: 20
    },
    {
      filename: 'jack_gif.gif',
      frequency: 10
    }
  ];

  const xhr = new XMLHttpRequest();
  xhr.open('GET', './gifInfo');
  xhr.responseType = 'json';
  xhr.send(null);

  xhr.onreadystatechange = function () {
    const DONE = 4;
    const OK = 200;
    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        const gifTV = new GifTv({
          regularGifInfo,
          targetElement: gifElement,
          gifInfoArray: xhr.response.gifInfo
        });
        gifTV.init();
      } else {
        console.log('Error: ' + xhr.status);
      }
    }
  };

});
