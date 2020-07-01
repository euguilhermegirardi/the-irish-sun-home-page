function slider() {
   tns({
      controls: false,
      container: ".slider",
      slideBy: "page",
      items: 6,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      preventScrollOnTouch: "force",
   });
}

slider();

