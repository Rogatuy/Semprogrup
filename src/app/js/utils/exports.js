// Экспортируемые функции
export const fn = {
  toggle(element, selector) {
    element.classList.toggle(selector);
  },
  addActiveSelector(element, selector) {
    element.classList.add(selector);
  },
  removeActiveSelector(element, selector) {
    element.classList.remove(selector);
  },
  setValue(placeholder, newValue) {
    placeholder.value = newValue;
  },
  getElementHeight(element) {
    return element.offsetHeight;
  },

  resetBodyOffset() {
    const body = document.body;
    const fixedElements = document.querySelectorAll('.fixed');

    body.style.paddingRight = '';
    fixedElements.forEach((el) => (el.style.paddingRight = ''));
    body.style.overflow = 'auto';
  },

  toggleBodyOffset() {
    const body = document.body;
    const fixedElements = document.querySelectorAll('.fixed');
    const scrollWidth = window.innerWidth - body.offsetWidth;

    if (body.style.paddingRight) {
      body.style.paddingRight = '';
      fixedElements.forEach((el) => (el.style.paddingRight = ''));
      body.style.overflow = 'auto';
    } else {
      body.style.paddingRight = `${scrollWidth}px`;
      fixedElements.forEach(
        (el) => (el.style.paddingRight = `${scrollWidth}px`)
      );
      body.style.overflow = 'hidden';
    }
  },
};
