let options = {
  Dots: false,
  Navigations: true,
  infinite: false,
  dragFree: true
}



let sliders = document.querySelectorAll('.js-carousel');
sliders.forEach(item => {
  new Carousel(item, options);
})


let birthdayCards = document.querySelectorAll('.birthdays__item');
birthdayCards.forEach((item, indx) => {
 let inputs = item.querySelectorAll('.birthdays__input');
 let labels = item.querySelectorAll('.birthdays__element');

 inputs.forEach((input, number) => {
  input.setAttribute('id', 'radio'+indx+number);
  input.setAttribute('name', 'smiles'+indx);
 })

 labels.forEach((label, number) => {
   label.setAttribute('for','radio'+indx+number);
   
   label.addEventListener('click', (e)=> {
    e.preventDefault;
    label.classList.remove('animate');
    label.classList.add('animate');
    setTimeout(function(){
      label.classList.remove('animate');
    },700);
   }, false)
 })

})

