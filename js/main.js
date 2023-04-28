import { BUTTONS_ARRAY_EN } from './keyValue.js';

let textarea = null;
let buttonsWrapper = null;

function addHtml() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const title = document.createElement('h1');
  title.innerHTML = 'RSS Virtual keyboard';
  wrapper.append(title);

  textarea = document.createElement('textarea');
  textarea.classList.add('textarea-scope');
  wrapper.append(textarea);

  buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('buttons-wrapper');
  wrapper.append(buttonsWrapper);

  const description = document.createElement('h2');
  description.classList.add('description');
  description.innerHTML = 'Virtual keyboard for Windows';
  wrapper.append(description);

  const subDescription = document.createElement('p');
  subDescription.classList.add('description');
  subDescription.innerHTML = 'To switch language combination: left CTRL + ALT';
  wrapper.append(subDescription);

  document.body.append(wrapper);
}

addHtml();

function createKeyRow() {
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < BUTTONS_ARRAY_EN[0].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = BUTTONS_ARRAY_EN[0][i].id;
      key.innerHTML = BUTTONS_ARRAY_EN[0][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < BUTTONS_ARRAY_EN[1].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = BUTTONS_ARRAY_EN[1][i].id;
      key.innerHTML = BUTTONS_ARRAY_EN[1][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < BUTTONS_ARRAY_EN[2].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = BUTTONS_ARRAY_EN[2][i].id;
      key.innerHTML = BUTTONS_ARRAY_EN[2][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < BUTTONS_ARRAY_EN[3].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = BUTTONS_ARRAY_EN[3][i].id;
      key.innerHTML = BUTTONS_ARRAY_EN[3][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < BUTTONS_ARRAY_EN[4].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = BUTTONS_ARRAY_EN[4][i].id;
      key.innerHTML = BUTTONS_ARRAY_EN[4][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
}

createKeyRow();
