import {
  createStore
} from 'redux';

import reducers from './reducers.js';

const settings = loadLocal();

function loadLocal() {
  const hasLocalStorage = typeof(Storage) !== 'undefined';

  return {
    navbarOpen: hasLocalStorage
      ? localStorage.getItem('navbarOpen') === 'true'
      : null,
    lang: hasLocalStorage
      ? localStorage.getItem('lang')
      : null,
    isAsc: hasLocalStorage
      ? localStorage.getItem('isAsc') === 'true'
      : null
  }
}

const defaultState = {
  data: {
    info: [],
    education: [],
    work: []
  },
  isLoading: false,
  isAsc: settings.isAsc !== null
    ? settings.isAsc
    : true,
  lang: settings.lang !== null
    ? settings.lang
    : 'en'
};


export const store = createStore(reducers, defaultState);
