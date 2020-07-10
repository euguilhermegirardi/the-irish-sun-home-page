const sliders = document.querySelectorAll('.most-read__slider');

sliders.forEach(slider => {
   tns({
      controls: false,
      container: slider,
      slideBy: "page",
      items: 5,
      mouseDrag: true,
      swipeAngle: false,
      speed: 300,
      preventScrollOnTouch: "force",
      responsive: {
         500: {
            controls: true,
            controlsText: ['<', '>'],
         }
      }
   });
})
