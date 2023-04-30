const validationInput = document.querySelector('#validation-input');
const numberDataLength = parseInt(
  validationInput.attributes['data-length'].value
);
validationInput.addEventListener('blur', () => {
  if (validationInput.value.length === numberDataLength) {
    if (validationInput.classList.contains('invalid')) {
      validationInput.classList.replace('invalid', 'valid');
    } else {
      validationInput.classList.add('valid');
    }
  }
  else {
    if (validationInput.classList.contains('valid')) {
      validationInput.classList.replace('valid', 'invalid');
    } else {
      validationInput.classList.add('invalid');
    }
  }
});
