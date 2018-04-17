import { createStore } from 'redux';

import reducers from './reducers';

function loadLocal() {
  const hasLocalStorage = typeof Storage !== 'undefined';

  return {
    navbarOpen: hasLocalStorage ? localStorage.getItem('navbarOpen') === 'true' : null,
    lang: hasLocalStorage ? localStorage.getItem('lang') : null,
    isAsc: hasLocalStorage ? localStorage.getItem('isAsc') === 'true' : null,
  };
}

const settings = loadLocal();
const defaultState = {
  data: {
    info: [],
    education: [],
    work: [],
  },
  isLoading: false,
  isAsc: settings.isAsc !== null ? settings.isAsc : true,
  lang: settings.lang !== null ? settings.lang : 'en',
};

export default createStore(reducers, defaultState);
