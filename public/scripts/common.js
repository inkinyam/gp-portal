let options = {
  Dots: false,
  Navigations: true,
  infinite: false,
  dragFree: true,
  center: false
}

let sliders = document.querySelectorAll('.js-carousel');
sliders.forEach(item => {
  new Carousel(item, options);
})
