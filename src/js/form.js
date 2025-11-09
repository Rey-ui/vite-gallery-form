const dataKey = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

formEl.addEventListener('input', saveUserData);
formEl.addEventListener('submit', submitForm);

window.addEventListener('load', () => {
  const getData = JSON.parse(localStorage.getItem(dataKey)) || {};
  formEl.elements.email.value = getData.email || '';
  formEl.elements.message.value = getData.message || '';
});

function saveUserData(e) {
  const form = e.currentTarget;
  const inputEl = form.elements.email.value.trim();
  const textareaEl = form.elements.message.value.trim();
  formData = {
    email: inputEl,
    message: textareaEl,
  };
  if (formData.email !== '' || formData.message !== '') {
    localStorage.setItem(dataKey, JSON.stringify(formData));
  } else {
    localStorage.removeItem(dataKey);
  }
}

function submitForm(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const inputEl = form.elements.email.value.trim();
  const textareaEl = form.elements.message.value.trim();
  if (inputEl == '' || textareaEl == '') {
    console.log('enter text');
    return;
  }
  localStorage.removeItem(dataKey);
  console.log(formData);
  form.reset();
}
