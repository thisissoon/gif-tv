$(document).ready( () => {
  
  const gifs = [
    '2XN.gif',
    '6N2Fa.gif',
    '80dancepaty.gif'
  ];

  const $gifDiv = $('.gif');

  let index = 0;                     

  function gifLoop() {           
    setTimeout(() => {    
      updateGif($gifDiv, gifs[index]);
      index ++;          
      if (index < gifs.length) {            
        gifLoop();           
      } else {
        index = 0;
        gifLoop();
      }
    }, 3000);
  }

  gifLoop();  

  function updateGif($element, gifFilename) {
    $element.css('background-image', `url(./assets/PARTY_GIFS/${gifFilename})`);
  }


});