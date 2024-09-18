const text_El = document.getElementById('text-el');
const btn_El = document.getElementById('btn-el');
const input_El = document.getElementById('input-el');
const input_text_El = document.getElementById('input-field');

function changeText() {
  btn_El.innerText = 'Text changed';
  text_El.innerText = 'Welcome js';
}

function submitText() {
  input_text_El.innerText = input_El.value;
  input_El.value = '';
}
