$(document).ready( () => {

  const gifImg = document.getElementsByClassName('gif-container')[0];

  const $gifImg = $(gifImg);

  let gifInfo = [];

  let index = 0;                     

  function gifLoop() {           
    setTimeout(() => {    
      updateGif($gifImg, gifInfo[index].filename);
      index ++;          
      if (index < gifInfo.length) {            
        gifLoop();           
      } else {
        index = 0;
        gifLoop();
      }
    }, Math.max(gifInfo[index].gifDuration * 3, 5000));
  }

  function updateGif($element, gifFilename) {
    $element.css('background-image', `url(./assets/PARTY_GIFS/${gifFilename})`);
  }

  $.ajax({
    method: 'GET',
    url: './gifInfo'
  })
    .done(data => {
      gifInfo = data.gifInfo;
      updateGif($gifImg, gifInfo[index].filename);
      index ++; 
      gifLoop(); 
    });

  $gifImg.on('click', (e) => {
    e.target.webkitRequestFullscreen();
  });


});