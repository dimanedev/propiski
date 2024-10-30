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

let swiper1 = new Swiper(".mySwiper", {
  autoplay: {
    delay: 5000
  },
  slidesPerView: 'auto',
  loop: true,
  loopAddBlankSlides: true,
  spaceBetween: 20,
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

let headerHeight = document.querySelector('.header').clientHeight;

window.addEventListener('resize', () => {
  headerHeight = document.querySelector('.header').clientHeight;
});

function handleNavbar() {
  let scrollTop = window.scrollY;
  let navbar = document.querySelector('.navbar');

  if (scrollTop >= headerHeight) {
    navbar.classList.add('navbar__fixed');
  } else {
    navbar.classList.remove('navbar__fixed');
  }
}

handleNavbar();

window.addEventListener('scroll', handleNavbar);

// Burger btn

document.querySelector('.burger').addEventListener('click', (e) => {
  e.target.classList.toggle('active');
  document.body.classList.toggle('fixed');
  document.querySelector('.mob_menu').classList.toggle('active');

  let rect = document.querySelector('.header').getBoundingClientRect();
  let mobMenuTop = 0;
  let mobMenu = document.querySelector('.mob_menu__inner');

  if (rect.bottom > 0) {
    mobMenuTop = rect.bottom;
  }

  mobMenu.style.top = mobMenuTop + 'px';
})