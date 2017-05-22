document.addEventListener('DOMContentLoaded', () => {

  // DOM element selected
  const gifElement    = document.getElementsByClassName('gif-container')[0];
  
  // Specify gifs to be repeated 
  const regularGifsInfo = [
    {
      filename: 'SOON_Logo_v2.gif',
      frequency: 20
    },
    {
      filename: 'jack.gif',
      frequency: 10
    }
  ];

  // Make AJAX request for gifInfoArray.
  // On response create gifTv instance from GifTv constructor function
  // and initiate the start of the gif loop. 
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
          regularGifsInfo: regularGifsInfo,
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
