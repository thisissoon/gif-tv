$(document).ready( () => {

  const gifImg = document.getElementsByClassName('gif-container')[0];

  const $gifImg = $(gifImg);

  let gifFilenames = [];

  let index = 0;                     

  function gifLoop() {           
    setTimeout(() => {    
      updateGif($gifImg, gifFilenames[index]);
      index ++;          
      if (index < gifFilenames.length) {            
        gifLoop();           
      } else {
        index = 0;
        gifLoop();
      }
    }, 4200);
  }

  function updateGif($element, gifFilename) {
    $element.css('background-image', `url(./assets/PARTY_GIFS/${gifFilename})`);
  }

  $.ajax({
    method: 'GET',
    url: './gifFilenames'
  })
    .done(data => {
      gifFilenames = data.gifFilenames;
      gifLoop(); 
    });

  $gifImg.on('click', (e) => {
    e.target.webkitRequestFullscreen();
  });


});