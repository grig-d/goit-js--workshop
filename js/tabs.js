'use strict';

const refs = {
  controls: document.querySelector(`#tabs-1 [data-controls]`),
  panes: document.querySelector(`#tabs-1 [data-panes]`),
};

refs.controls.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.nodeName !== 'A') {
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector(
    '.controls__item--active',
  );

  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('controls__item--active');
  }

  const control = event.target;
  control.classList.add('controls__item--active');
  // console.log(control);
});
