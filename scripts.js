const button = document.querySelector('.button')
const errorParagraph = document.querySelector('.error')
const input = document.querySelector('.input')

const isNumeric = n => !!Number(n);

class ValidationError {
  constructor(message) {
    this.message = message
  }
}

button.addEventListener('click', (e) => {
  e.preventDefault();

  input.classList.remove('invalid')
  errorParagraph.textContent = 'No errors';

  const value = input.value.trim()

  try {
    if (value === '') {
      throw new ValidationError("Input value is required")
    } else if (!isNumeric(value)) {
      throw new ValidationError("Input value must be a number")
    } else if (value < 5 || value > 10) {
      throw new ValidationError("Input value must be greater than 5 and less than 10")
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      input.classList.add('invalid')
      errorParagraph.textContent = error.message;
    }
    else {
      throw error;
    }
  }
})


