$(document).ready( () => {

  const gif = document.getElementsByClassName('gif')[0];

  const $gifImg = $('.gif-container__gif-image');

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
    }, 3000);
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

  // $gifImg.on('click', (e) => {
  //   gif.webkitRequestFullscreen();
  // });


});