const requiredInputs = document.querySelectorAll('input[required]');

requiredInputs.forEach(input => {
  input.addEventListener('focusout', event => {
    if (!input.checkValidity()) {
      input.classList.add('input_error');
    } else {
      input.classList.remove('input_error');
    }
  });


});

let inputs = Array.from(document.querySelectorAll('input'));
let textareas = Array.from(document.querySelectorAll('textarea'));

inputs.concat(textareas).forEach(input => {
  input.addEventListener('change', event => {
    if (input.checkValidity() && input.value != 0) {
      input.classList.add('input_completed');
    } else {
      input.classList.remove('input_completed');
    }
  })
});


// Slider

let swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000
  },
  slidesPerView: 'auto',
  loop: true,
  loopAddBlankSlides: true,
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  //   // when window width is >= 640px
  //   768: {
  //     slidesPerView: 6,
  //     spaceBetween: 20,
  //     spaceBetweenRows: 50
  //   }
  // },
  grid: {
    rows: 2,
    fill: 'row'
  },
  spaceBetween: 20,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
});


// Відгуки

let starsWrappers = document.querySelectorAll('.stars-wrapper');

starsWrappers.forEach(starsWrapper => {
  let starsCount = starsWrapper.classList[1][6];
  let children = starsWrapper.children;

  for (let i = 0; i < starsCount; i++) {
    children[i].classList.add('checked');
  }
});




// Accordion (Часті питання)

const accordionItems = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < accordionItems.length; i++) {
    accordionItems[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

accordionItems.forEach(item => item.addEventListener('click', toggleAccordion));