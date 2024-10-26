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