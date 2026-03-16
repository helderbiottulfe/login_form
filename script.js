const studentForm = document.getElementById('studentForm');
const successMessage = document.getElementById('successMessage');

const fields = {
  firstName: {
    input: document.getElementById('firstName'),
    error: document.getElementById('firstNameError'),
    validate: (value) => {
      if (!value.trim()) {
        return 'First Name is required.';
      }
      if (!/^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/.test(value.trim())) {
        return 'Enter a valid first name.';
      }
      return '';
    }
  },
  lastName: {
    input: document.getElementById('lastName'),
    error: document.getElementById('lastNameError'),
    validate: (value) => {
      if (!value.trim()) {
        return 'Last Name is required.';
      }
      if (!/^[a-zA-Z]+(?:[ -][a-zA-Z]+)*$/.test(value.trim())) {
        return 'Enter a valid last name.';
      }
      return '';
    }
  },
  email: {
    input: document.getElementById('email'),
    error: document.getElementById('emailError'),
    validate: (value) => {
      if (!value.trim()) {
        return 'Email is required.';
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        return 'Enter a valid email address.';
      }
      return '';
    }
  },
  password: {
    input: document.getElementById('password'),
    error: document.getElementById('passwordError'),
    validate: (value) => {
      if (!value.trim()) {
        return 'Password is required.';
      }
      if (value.trim().length < 8) {
        return 'Password must be at least 8 characters.';
      }
      return '';
    }
  },
  studentId: {
    input: document.getElementById('studentId'),
    error: document.getElementById('studentIdError'),
    validate: (value) => {
      if (!value.trim()) {
        return 'Student ID is required.';
      }
      if (!/^[A-Za-z0-9-]{4,}$/.test(value.trim())) {
        return 'Student ID must be at least 4 characters.';
      }
      return '';
    }
  }
};

function showError(field, message) {
  field.input.classList.add('invalid');
  field.error.textContent = message;
  field.error.classList.add('visible');
}

function hideError(field) {
  field.input.classList.remove('invalid');
  field.error.textContent = '';
  field.error.classList.remove('visible');
}

function validateField(field) {
  const message = field.validate(field.input.value);

  if (message) {
    showError(field, message);
    return false;
  }

  hideError(field);
  return true;
}

Object.values(fields).forEach((field) => {
  field.input.addEventListener('input', () => {
    validateField(field);
  });
});

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const isFormValid = Object.values(fields).every((field) => validateField(field));

  if (!isFormValid) {
    return;
  }

  studentForm.reset();
  Object.values(fields).forEach(hideError);
  studentForm.hidden = true;
  successMessage.hidden = false;
});
