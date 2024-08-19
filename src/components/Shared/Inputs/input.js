const inputBlocks = document.querySelectorAll('.input-block');

if (inputBlocks.length > 0) {
  const checkInputEmpty = (evt) => {
    const inputValue = evt.target.value;

    const parentBlock = evt.target.closest('.input-block');
    if (inputValue !== '') {
      parentBlock.classList.add('not-empty');
    } else {
      parentBlock.classList.remove('not-empty');
    }
  };

  const hideErrors = (evt) => {
    const parentBlock = evt.target.closest('.input-block');
    parentBlock.classList.remove('error');
  };

  inputBlocks.forEach((inputBlock) => {
    const input = inputBlock.querySelector('.input-block__input');

    input.addEventListener('blur', checkInputEmpty);
    input.addEventListener('focus', hideErrors);
  });
}
