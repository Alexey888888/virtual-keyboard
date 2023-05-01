import { BUTTONS_ARRAY_EN, keyText, BUTTONS_ARRAY_RU } from './keyValue.js';

let textarea = null;
let buttonsWrapper = null;
let lang = BUTTONS_ARRAY_EN;
let keyArr = null;
let language = 'en';

const setLocalStorage = () => {
  language = lang === BUTTONS_ARRAY_RU ? 'ru' : 'en';
  localStorage.setItem('language', language);
};

const getLocalStorage = () => {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
};

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);

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
  subDescription.innerHTML = 'To switch language combination: left CTRL + left ALT';
  wrapper.append(subDescription);

  document.body.append(wrapper);
}

addHtml();

function createKeyRow() {
  buttonsWrapper.innerHTML = '';

  if (localStorage.getItem('language')) {
    if (localStorage.language === 'ru') {
      lang = BUTTONS_ARRAY_RU;
    }
  }

  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < lang[0].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = lang[0][i].id;
      key.innerHTML = lang[0][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < lang[1].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = lang[1][i].id;
      key.innerHTML = lang[1][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < lang[2].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = lang[2][i].id;
      key.innerHTML = lang[2][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < lang[3].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = lang[3][i].id;
      key.innerHTML = lang[3][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row');
    for (let i = 0; i < lang[4].length; i += 1) {
      const key = document.createElement('div');
      key.classList.add('keyboard__item');
      key.dataset.id = lang[4][i].id;
      key.innerHTML = lang[4][i].down;
      keyRow.append(key);
    }
    buttonsWrapper.append(keyRow);
  }
  keyArr = document.querySelectorAll('.keyboard__item');
}

const changeLang = () => {
  lang = lang === BUTTONS_ARRAY_EN ? BUTTONS_ARRAY_RU : BUTTONS_ARRAY_EN;
  localStorage.language = lang === BUTTONS_ARRAY_RU ? 'ru' : 'en';
  createKeyRow();
};

createKeyRow();

const keydownHandler = (event) => {
  const cursorStart = textarea.selectionStart;
  const cursorEnd = textarea.selectionEnd;
  const textBeforeCursor = textarea.value.substring(0, cursorStart);
  const textAfterCursor = textarea.value.substring(cursorEnd);
  textarea.focus();
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    event.preventDefault();
  }

  keyArr.forEach((item) => {
    if (item.dataset.id === event.code) {
      item.classList.add('active');
      if (event.code === 'CapsLock') {
        item.classList.toggle('caps-active');
      }
    }
  });
  if (event.ctrlKey && event.code === 'AltLeft') {
    changeLang();
  }
  if (keyText.includes(event.code)) {
    event.preventDefault();
    keyArr.forEach((item) => {
      if (item.dataset.id === event.code) {
        item.classList.add('active');
        if (event.shiftKey === false) {
          textarea.value = textBeforeCursor + item.textContent.toLowerCase() + textAfterCursor;
          textarea.selectionStart = textBeforeCursor.length + 1;
          textarea.selectionEnd = textBeforeCursor.length + 1;
        }
        if (event.shiftKey === true || document.querySelector('.caps-active')) {
          textarea.value = textBeforeCursor + item.textContent + textAfterCursor;
          textarea.selectionStart = textBeforeCursor.length + 1;
          textarea.selectionEnd = textBeforeCursor.length + 1;
        }
      }
    });
  }
};

document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', () => {
  keyArr.forEach((item) => {
    item.classList.remove('active');
  });
});

const mouseDownHandler = (event) => {
  const cursorStart = textarea.selectionStart;
  const cursorEnd = textarea.selectionEnd;
  const textBeforeCursor = textarea.value.substring(0, cursorStart);
  const textAfterCursor = textarea.value.substring(cursorEnd);
  textarea.focus();
  if (event.target.dataset.id === 'CapsLock') {
    event.target.classList.toggle('caps-active');
  }
  if (event.target.dataset.id === undefined) {
    document
      .querySelector('.buttons-wrapper')
      .classList.add('buttons-wrapper-active');
  }
  keyArr.forEach((item) => {
    if (event.target.dataset.id === 'Backspace') {
      event.target.classList.add('active');
      textarea.value = textBeforeCursor.slice(0, -1) + textAfterCursor;
      if (textBeforeCursor.length > 0) {
        textarea.selectionEnd = textBeforeCursor.length - 1;
      }
    } else if (event.target.dataset.id === 'Delete') {
      textarea.value = textBeforeCursor + textAfterCursor.substring(1);
      textarea.selectionEnd = textBeforeCursor.length;
    } else if (
      event.target.dataset.id === 'ControlLeft' || event.target.dataset.id === 'AltLeft' || event.target.dataset.id === 'ShiftLeft' || event.target.dataset.id === 'AltRight' || event.target.dataset.id === 'ShiftRight' || event.target.dataset.id === 'ControlRight' || event.target.dataset.id === 'MetaLeft'
    ) {
      textarea.selectionStart = textarea.selectionEnd;
    } else if (item.dataset.id === event.target.dataset.id) {
      item.classList.add('active');
      if (event.shiftKey === false && !document.querySelector('.caps-active')) {
        textarea.value = textBeforeCursor + item.textContent.toLowerCase() + textAfterCursor;
        textarea.selectionStart = textBeforeCursor.length + 1;
        textarea.selectionEnd = textBeforeCursor.length + 1;
      }
      if (event.shiftKey === true || document.querySelector('.caps-active')) {
        textarea.value += item.textContent;
      }
    }
  });
};

const mouseUpHandler = () => {
  textarea.focus();
  document
    .querySelector('.buttons-wrapper')
    .classList.remove('buttons-wrapper-active');
  keyArr.forEach((item) => {
    item.classList.remove('active');
  });
};

document.addEventListener('mousedown', mouseDownHandler);
document.addEventListener('mouseup', mouseUpHandler);
