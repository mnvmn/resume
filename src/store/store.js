import { createStore } from 'redux';

import reducers from './reducers';

function loadLocal() {
  const hasLocalStorage = typeof Storage !== 'undefined';

  return {
    navbarOpen: hasLocalStorage && localStorage.getItem('navbarOpen') === 'true',
    lang: hasLocalStorage ? localStorage.getItem('lang') : null,
    isAsc: hasLocalStorage ? localStorage.getItem('isAsc') === 'true' : false,
  };
}

const settings = loadLocal();
const defaultState = {
  repo: {
    pushed_at: '',
  },
  data: {
    info: [],
    education: [],
    work: [],
    contact: null,
  },
  isLoading: false,
  navbarOpen: settings.isAsc !== null ? !!settings.navbarOpen : false,
  isAsc: settings.isAsc !== null ? !!settings.isAsc : true,
  lang: settings.lang !== null ? settings.lang : 'en',
};

export default createStore(reducers, defaultState);
