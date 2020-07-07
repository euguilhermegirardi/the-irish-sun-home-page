const sliders = document.querySelectorAll('.most-read__slider');

sliders.forEach(slider => {
   tns({
      controls: false,
      container: slider,
      slideBy: "page",
      items: 2,
      mouseDrag: true,
      swipeAngle: false,
      speed: 300,
      preventScrollOnTouch: "force",
      // autoWidth: true
      responsive: {
         500: {
            controls: true,
            fixedWidth: false
         }
      }
   });
})
