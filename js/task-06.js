const validationInput = document.querySelector('#validation-input');
const numberDataLength = parseInt(
  validationInput.attributes['data-length'].value
);
validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === numberDataLength) {
    if (validationInput.classList.contains('invalid')) {
      validationInput.classList.remove('invalid');
    }
     validationInput.classList.add('valid');
  }
  else {
    if (validationInput.classList.contains('valid')) {
      validationInput.classList.remove('valid');
    }
     validationInput.classList.add('invalid');
  }
});