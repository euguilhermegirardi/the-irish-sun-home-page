function mostReadSlider() {
   tns({
      controls: false,
      container: ".most-read__slider",
      slideBy: "page",
      items: 2,
      mouseDrag: true,
      swipeAngle: false,
      speed: 300,
      preventScrollOnTouch: "force",
   });
}

mostReadSlider();
