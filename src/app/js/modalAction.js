const body = document.querySelector('body');
const header = document.querySelector('header');

const getScrollbarWidth = () => {
  return window.innerWidth - document.documentElement.clientWidth;
};

const openModal = (targetClass) => {
  const scrollbarWidth = getScrollbarWidth();
  body.style.paddingRight = `${scrollbarWidth}px`;
  header.style.paddingRight = `${scrollbarWidth}px`;
  body.style.overflow = 'hidden';

  const popup = document.querySelector(`.${targetClass}`);
  popup.classList.add('active');

  document.addEventListener('keydown', (evt) =>
    handleEscapePress(evt, targetClass)
  );
};

const closeModal = (targetClass) => {
  body.style.paddingRight = '';
  header.style.paddingRight = '';
  body.style.overflow = 'auto';

  const popup = document.querySelector(`.${targetClass}`);
  popup.classList.remove('active');

  document.removeEventListener('keydown', (evt) =>
    handleEscapePress(evt, targetClass)
  );
};

function handleEscapePress(event, classModal) {
  if (event.key === 'Escape') {
    closeModal(classModal);
  }
}

const buttonPopupOpen = document.querySelectorAll('.popup-open');

if (buttonPopupOpen.length > 0) {
  const body = document.querySelector('body');
  buttonPopupOpen.forEach((button) => {
    const namePopup = button.getAttribute('data-modal-open');
    const popup = document.querySelector(`.${namePopup}`);

    if (popup) {
      const closeButton = popup.querySelector('.close-popup');

      button.addEventListener('click', () => {
        openModal(namePopup);
        body.style.overflow = 'hidden';
      });

      closeButton.addEventListener('click', () => {
        closeModal(namePopup);
        body.style.overflow = 'auto';
      });
    }
  });
}
