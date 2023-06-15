// навешивает анимацию на элемент, когда он появляется на 20% на экране
 function AnimationObserver(){
  const sections = [...document.querySelectorAll("js-animated")];


  const callback = (entries, observer) => {
    entries.forEach(entry => {
      const { target } = entry;
      
      if (entry.intersectionRatio >= 0.2) {
        target.classList.add("animate");
      } else {
      //  target.classList.remove("gp-jumpUp");
      }
    });
  };
  let options = {
    threshold: [.0,.1,.2,.3,.4,.5,.6,.7,.8,.9,] };
  let observer = new IntersectionObserver(callback, options);
  let elements = document.querySelectorAll('.js-animated');
  
  for (let elm of elements) {
    observer.observe(elm);
  }
}

AnimationObserver();