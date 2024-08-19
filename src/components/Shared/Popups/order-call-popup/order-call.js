import '../../Inputs/input.js';
import IMask from 'imask';

const popupOrderCall = document.querySelector('.order-call-popup');

if (popupOrderCall) {
  //! Работа с маской
  const phoneInput = document.getElementById('phone-input');

  const maskOptions = {
    mask: '+{7} (000) 000-00-00',
  };

  // eslint-disable-next-line no-unused-vars
  const mask = IMask(phoneInput, maskOptions);

  //!Работа с формой
  const form = popupOrderCall.querySelector('.call-form');
  const inputBlocks = popupOrderCall.querySelectorAll('.input-block');

  const formReset = () => {
    form.reset();
    inputBlocks.forEach((inputBlock) => {
      inputBlock.classList.remove('error');
      inputBlock.classList.remove('not-empty');
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isFormValid = true;

    inputBlocks.forEach((inputBlock) => {
      const input = inputBlock.querySelector('.input-block__input');

      if (input.name === 'call-name') {
        if (input.value === '') {
          inputBlock.classList.add('error');
          isFormValid = false;
        }
      }

      if (input.name === 'call-phone') {
        if (input.value === '' || mask.unmaskedValue.length !== 11) {
          inputBlock.classList.add('error');
          isFormValid = false;
        }
      }

      if (input.name === 'call-email') {
        if (!/.+@.+\..+/i.test(input.value)) {
          inputBlock.classList.add('error');
          isFormValid = false;
        }
      }
    });

    if (isFormValid) {
      const formData = new FormData(form);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      formReset();
      console.log('Успешная отправка:', formObject);
    }
  });

  //!Обнуление формы при открытии
  const buttonOpen = document.querySelector(
    '[data-modal-open="order-call-popup"]'
  );

  buttonOpen.addEventListener('click', formReset);
}
