function initCarousel() {
  
  let button = document.querySelector('.carousel__arrow_right');
  button.addEventListener('click', right);

  let button2 = document.querySelector('.carousel__arrow_left ');
  button2.addEventListener('click', left);

  let carousel = document.querySelector('.carousel__inner');
  carousel.setAttribute('data-current-slide', 1)
  
  button2.style.display = 'none';
 
}

function right(){
  move(true);
}

function left(){
  move(false);
}

function move(isRight){
  
  let carousel = document.querySelector('.carousel__inner');
  
  let currentSlide = Number(carousel.dataset.currentSlide);
  
  let width;
  
  if (isRight){
    width = currentSlide * carousel.offsetWidth * - 1;
    currentSlide = currentSlide + 1;
  }
  else{
    width = (currentSlide-2) * carousel.offsetWidth * - 1;
    currentSlide = currentSlide - 1;
  }
  
  carousel.style.transform = `translateX(${width}px)`;

  let buttonRight = document.querySelector('.carousel__arrow_right');
  let buttonLeft = document.querySelector('.carousel__arrow_left ');

  if (currentSlide === 1){
    buttonLeft.style.display = 'none';
  }
  else if (currentSlide === 4){
    buttonRight.style.display = 'none';
  }
  else {
    buttonLeft.style.display = '';
    buttonRight.style.display = '';

  }
  carousel.dataset.currentSlide =  String(currentSlide);
}


  
